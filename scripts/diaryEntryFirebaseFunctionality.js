import { doc, setDoc, collection, addDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

// Function to handle image upload
async function uploadImageToFirebase(file) {
    if (!window.auth.currentUser) {
        console.log("Um, no one is signed in...")
        return ""
    }
    try {
        console.log(window.auth.currentUser.uid)
        // Create a unique filename using timestamp
        const timestamp = new Date().getTime();
        const filename = `${timestamp}_${file.name}`;
        
        // Create a storage reference
        const storageRef = ref(window.firebaseStorage, window.auth.currentUser.uid + '/images/' + filename);
        
        // Upload the file
        const snapshot = await uploadBytes(storageRef, file);
        console.log('Uploaded image successfully!');
        
        // Get the download URL
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log('File available at:', downloadURL);
        
        return downloadURL;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
}
window.uploadImageToFirebase = uploadImageToFirebase

// This function takes a date in the format "MM-DD-YYYY"
// And populates the widgets with the corresponding diary entry from firestore
// If the diary entry does not exist yet, it leaves the widgets area blank for creation.
async function pullDiaryEntryFromFirestore(date){
    console.log("Pulling diary entry from firestore");
    // Pull diary entry from firestore for specific day
    // Do this once when the diary entry is clicked on. 
    let docRef = doc(db, "users/" + window.auth.currentUser.uid + "/diaryEntries", date);
    let docSnap = await getDoc(docRef);

    // If the diary entry for this day already exists, populate
    if (docSnap.exists()) {
        // Get the references to widgets for thos entry
        let references = docSnap.data()
        //rating variables
        let averageRating = 0;
        let i = 0
        let rating = 0;

        // Loop through each key in the document
        for (let key in references) {
            // Skip avgRating as it's not a reference
            if (key === 'avgRating') {
                continue;
            }

            // Handle widget references
            let collection = references[key].parent.id
            docRef = doc(db, "users/" + window.auth.currentUser.uid + "/" + collection, references[key].id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                references[key] = docSnap.data()
            } else {
                console.log("No such document for widget reference:", references[key]);
                continue
            }
            console.log(references[key])

            rating += references[key].rating;
            i += 1;

            let widgetElement = transformWidgetToElement(key, references[key])
            document.getElementById("widgetsForDay").appendChild(widgetElement)
            
        }   
        averageRating = rating / i;
        averageRating = Math.round(averageRating * 10) / 10; // Round to 1 decimal place
        document.getElementById("dateIdentifierHeading").innerText = `${date}: ⭐${averageRating}`
        console.log("Average rating for the day:", averageRating);     
        // Always move the empty widget to the end.
        let widgetsForDays = document.getElementById("widgetsForDay")
        let el = widgetsForDays.querySelector(".emptyWidget") 
        widgetsForDays.appendChild(el);
    } else {
    console.log("No such document!");
    // No data for this so default go to creation mode. 
    }
}  

// Attach this function to the window so it can be called from goToDiary() in script.js
window.pullDiaryEntryFromFirestore = pullDiaryEntryFromFirestore;

// This function is used to get all the data from an HTML widget element and return the data in a JSON format.
function extractWidgetData(widgetElement) {
    console.log(widgetElement)
    let widgetData = {}
    
    let intRating = parseInt(widgetElement.querySelector(".starContainer").dataset.currentRating)
    widgetData.rating = intRating != NaN ? intRating  : 0 // Default to 0 stars if something goes wrong. 
    
    // Code for extracting /pictures collection fields
    if (widgetElement.querySelector(".image-widget")) {
        widgetData.widgetType = "picture"
        widgetData.src = widgetElement.querySelector("img").src
        widgetData.photoFrame = "plain" // TODO: get photo frame type

    // Code for extracting /notes collection fields
    } else if (widgetElement.querySelector(".note-widget")) {
        widgetData.widgetType = "note"
        widgetData.value = widgetElement.querySelector("textarea").value
        // Widget Type depends on what class is applied to the note widget. 
        if (widgetElement.querySelector(".notebookPaper")) {
            widgetData.noteType = "notebookPaper";
        } else if (widgetElement.querySelector(".post-it")) {
            widgetData.noteType = "post-it"
        } else {
            widgetData.noteType = "plain"
        }

    // Code for extracting /songs collection fields
    } else if (widgetElement.querySelector(".song-widget")) {
        widgetData.widgetType = "song"
        widgetData.songName = widgetElement.querySelector("input").value
        widgetData.songFrame = "plain"
    }
    return widgetData
}

// Push diary entry to firestore for specific day
async function saveDiaryEntryToFirestore() {
    console.log("Current diary date", currentDiaryDate)
    let allWidgetObjects = [];
    let totalRating = 0;
    let numRated = 0;
    // First, loop through all of the elements in the diary entry and extract the widget info. 
    for (let widgetElement of document.getElementById("widgetsForDay").children) {
        // Skip empty widget
        if (widgetElement.classList.contains("emptyWidget")) {
            continue;
        }
        let widgetObject = extractWidgetData(widgetElement);
        console.log(widgetObject);
        allWidgetObjects.push(widgetObject);
        if (typeof widgetObject.rating === 'number' && !isNaN(widgetObject.rating)) {
            totalRating += widgetObject.rating;
            numRated += 1;
        }
    }

    let diaryEntryData = {};
    // Then for each widget, create a new document in the appropriate collection and get the reference.
    let i = 0;
    for (let widgetObject of allWidgetObjects) {
        let collectionName = "";
        if (widgetObject.widgetType == "picture") {
            collectionName = "pictures";
        } else if (widgetObject.widgetType == "note") {
            collectionName = "notes";
        } else if (widgetObject.widgetType == "song") {
            collectionName = "songs";
        } else {
            console.error("Unknown widget type:", widgetObject.widgetType);
            continue;
        }
        // Create a new document in the appropriate collection
        const docRef = await addDoc(collection(db, "users/" + window.auth.currentUser.uid + "/" + collectionName), widgetObject);
        console.log("Document written with ID: ", docRef.id);

        // Store the reference for later use in the diary entry
        widgetObject.docRef = docRef;
        diaryEntryData[`widget_${i+1}`] = widgetObject.docRef;
        i += 1;
    }

    // Calculate and store the average rating for the day
    let avgRating = numRated > 0 ? Math.round((totalRating / numRated) * 10) / 10 : 0;
    diaryEntryData.avgRating = avgRating;

    // Finally, create or update the diary entry document with the references to each widget.
    await setDoc(doc(db, "users/" + window.auth.currentUser.uid + "/diaryEntries", currentDiaryDate), diaryEntryData);

    // Update the calendar cell with the new average rating
    const dateCell = document.querySelector(`.calendarCell[data-date="${currentDiaryDate}"]`);
    if (dateCell) {
        // Remove existing rating if any
        const existingRating = dateCell.querySelector('.calendarAvgRating');
        if (existingRating) {
            existingRating.remove();
        }
        // Add new rating if there is one
        if (avgRating > 0) {
            let ratingDiv = document.createElement('div');
            ratingDiv.className = 'calendarAvgRating';
            ratingDiv.innerText = `⭐${avgRating}`;
            dateCell.appendChild(ratingDiv);
        }
    }

    // Update the banner with the new average rating
    document.getElementById("dateIdentifierHeading").innerText = `${currentDiaryDate}: ⭐${avgRating}`;
}
document.getElementById("sendToFirestore").addEventListener("click", saveDiaryEntryToFirestore);
