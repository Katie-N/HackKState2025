// Functions to transform widgets into their editable versions
// Unified widget creation and transformation
function createWidgetElement(type, data = {}) {
    const element = document.createElement('li');
    let clickSound = new Audio('./audio/Processed/click.mp3');
    clickSound.preload = 'auto';
    clickSound.play();
    element.className = 'widget-base widget-container';
    if (type === 'note') {
        // Note widget
        const textarea = document.createElement('textarea');
        // FIXME: I am going to hard code the notebookPaper for all notes for now. 
        textarea.className = 'note-widget notebookPaper';
        textarea.placeholder = 'Write your note here...';
        if (data.value) {
            textarea.value = data.value;
            textarea.className += " " + data.noteType;
        }
        element.innerHTML = '';
        element.appendChild(textarea);
    } else if (type === 'picture') {
        // Image widget
        const container = document.createElement('div');
        container.className = 'image-widget widget-base';
        const img = document.createElement('img');
        img.style.display = data.src ? 'block' : 'none';
        // Populate the image name if it is coming from Firebase
        if (data.src) img.src = data.src;
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        const button = document.createElement('button');
        button.textContent = data.src ? 'Change Image' : 'Select Image';
        input.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    button.textContent = 'Uploading...';
                    button.disabled = true;
                    
                    // Upload the image using the global function we defined
                    const downloadURL = await window.uploadImageToFirebase(file);
                    
                    // Update the image source with the Firebase URL
                    img.src = downloadURL;
                    img.style.display = 'block';
                    button.textContent = 'Change Image';
                    button.disabled = false;
                    
                    // Store the Firebase URL in the widget's data
                    container.dataset.firebaseUrl = downloadURL;
                } catch (error) {
                    console.error('Error uploading image:', error);
                    alert('Failed to upload image. Please try again.');
                    button.textContent = 'Select Image';
                    button.disabled = false;
                }
            }
        });
        button.addEventListener('click', () => input.click());
        container.appendChild(img);
        container.appendChild(input);
        container.appendChild(button);
        element.innerHTML = '';
        element.appendChild(container);
    } else if (type === 'song') {
        // Song widget
        const container = document.createElement('div');
        container.className = 'song-widget widget-base';
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter song name here...';
        const preview = document.createElement('a');
        // Populate the song name if it is coming from Firebase
        if (data.songName) {
            input.value = data.songName;
            preview.href="https://open.spotify.com/search/" + encodeURI(data.songName)
            preview.target = "_blank";
        }
        preview.className = 'song-preview';
        container.appendChild(input);
        container.appendChild(preview);
        element.innerHTML = '';
        element.appendChild(container);
    }
    let starContainer = document.createElement('div')
    starContainer.className = 'starContainer';
    starContainer.dataset.currentRating = data.rating
    for (let i = 1; i < 6; i++) {
        
        // Make the star clickable
        const star = document.createElement('button');
        // star.datasets.starValue = i;
        star.className = 'star star' + i;
        // If the star is less than or equal to the current rating, make it filled
        if (data.rating && data.rating >= i) {
            star.className += ' filledStar';
        } else {
            // Otherwise, make it empty
            star.className += ' emptyStar';
        }

        // When the star is clicked, it should toggle the rating of that widget to the star value.
        // star.onclick="rateWidget()";
        star.addEventListener('click', rateWidget);
        starContainer.appendChild(star);
    }
    element.appendChild(starContainer);
    return element;
}

let oneStar = new Audio('./audio/Processed/oneStar.mp3');
let twoStar = new Audio('./audio/Processed/twoStar.mp3');
let threeStar = new Audio('./audio/Processed/threeStar.mp3');
let fourStar = new Audio('./audio/Processed/fourStar.mp3');
let fiveStar = new Audio('./audio/Processed/fiveStar.mp3');
oneStar.preload = 'auto';
twoStar.preload = 'auto';
threeStar.preload = 'auto';
fourStar.preload = 'auto';
fiveStar.preload = 'auto';

function rateWidget() {
    if (this.classList.contains('star1')) {
        oneStar.play();
        numStars = 1
    } else if (this.classList.contains('star2')) {
        twoStar.play();
        numStars = 2
    } else if (this.classList.contains('star3')) {
        threeStar.play();
        numStars = 3
    } else if (this.classList.contains('star4')) {
        fourStar.play();
        numStars = 4
    } else if (this.classList.contains('star5')) {
        fiveStar.play();
        numStars = 5
    }

    // Note that camel case is turned into all lowercase separated by dashes in html.
    // So currentRating becomes data-current-rating
    this.parentNode.dataset.currentRating = numStars

    for (i in this.parentNode.children) {
        if (i < numStars) {
            this.parentNode.children[i].classList.remove('emptyStar');
            this.parentNode.children[i].classList.add('filledStar');
        } else if (i < 5){
            this.parentNode.children[i].classList.remove('filledStar');
            this.parentNode.children[i].classList.add('emptyStar');
        }
    }
}

// This makes the list of available widgets selectable
Sortable.create(document.getElementById("widgetSelection"), { 
    group: {name: "sharedWidgets", pull: 'clone', put: false},
    animation: 150, 
    sort: false
 });

widgetsForDays = document.getElementById("widgetsForDay")
Sortable.create(widgetsForDays, { 
    group: {name: "sharedWidgets", put: true},
    animation: 150, 
    sort: true,
    filter: ".emptyWidget", // This prevents the empty widget from being draggable
    // This function prevents a widget from being moved below the pinned bottom item (the empty widget placeholder)
    onMove: (event, originalEvent) => {
        const pinnedBottomItem = widgetsForDays.querySelector(".emptyWidget");
        if (event.related === pinnedBottomItem && event.willInsertAfter === true) {
            return false // Disallow moving items below the pinned bottom item
        }
        return
    },
    onAdd: (event) => {
        // Replace the icon with the correct widget element
        const newElement = event.item;
        convertSelectionToWidget(newElement)
    }
 });

//  This function is used to convert the option button to an editable widget of the corresponding type.
 function convertSelectionToWidget(newElement) {
    // If the new element was added below the empty widget, move it above instead
    const emptyWidget = widgetsForDays.querySelector(".emptyWidget");
    widgetsForDays.appendChild(emptyWidget);

    // img here is just used to filter for the icon that was dragged
    const imgElement = newElement.querySelector('img');
    let type = null;
    if (imgElement) {
        const imgSrc = imgElement.src;
        if (imgSrc.includes('notepadIcon.png')) {
            type = 'note';
        } else if (imgSrc.includes('cameraIcon.png')) {
            type = 'picture';
        } else if (imgSrc.includes('music-playerIcon.png')) {
            type = 'song';
        }
    }
    if (type) {
        // Create the widget element and replace the icon
        const widget = createWidgetElement(type, {});
        widgetsForDays.replaceChild(widget, newElement);
    }
 }

// In order to enable just clicking to add the element to the list,
// I will add an event listener to each child and when it is clicked on, 
// it will copy the element and append it to the list. 
widgetSelection.addEventListener('click', function (event) {
    // Grab the closest option to where the click happened
    const child = event.target.closest('li'); 

    // Return early if there was an issue
    if (!child || !widgetSelection.contains(child)) return;

    const newEl = child.cloneNode(true);
    widgetsForDays.appendChild(newEl);
    convertSelectionToWidget(newEl);
});

function goToCalendar() {
    console.log("Going to calendar");
    
    document.getElementById("dateIdentifierHeading").innerText = window.dateIdentifier;

    // change background to white wall
    document.body.style.setProperty('--backgroundBodyImage', "linear-gradient(rgba(221, 155, 133, 0.55), rgba(221, 155, 133, 0.55)), url('../assets/WhiteWallTexture.jpg')");
    // change display of #diaryEntryScreen to none
    document.body.style.setProperty('--diaryEntryDisplay', 'none')
    // change display of #calendar to block
    document.body.style.setProperty('--calendarDisplay', 'block')
    // change display of #footer to block
    // document.body.style.setProperty('--footerDisplay', 'flex')
    document.body.style.setProperty('--optionsButtonDisplay', 'block')
    
    // When we go to the calendar, we don't need to see the link to go to the calendar or the button to send the diary entry to Firestore
    document.getElementById("goToCalendar").style.display = "none";
    document.getElementById("sendToFirestore").style.display = "none";
}

currentDiaryDate = null
function goToDiary(){
    // Delete all existing widgets except the empty one
    let widgetsForDay = document.getElementById("widgetsForDay");
    widgetsForDay.innerHTML = '<li class="emptyWidget widget-base widget-container">Drag widget here</li>';
    document.getElementById("dateIdentifierHeading").innerText = this.dataset.date;
    
    // Update the global variable so the save function knows what date we are on
    currentDiaryDate = this.dataset.date;

    window.pullDiaryEntryFromFirestore(this.dataset.date);
    // change background to corkboard
    document.body.style.setProperty('--backgroundBodyImage', "url('../assets/BrownPaperBackground.jpg')");
    // change display of #diaryEntryScreen to block
    document.body.style.setProperty('--diaryEntryDisplay', 'block')
    // change display of #calendar to none
    document.body.style.setProperty('--calendarDisplay', 'none')
    // change display of #footer to none
    // document.body.style.setProperty('--footerDisplay', 'none')
    document.body.style.setProperty('--optionsButtonDisplay', 'none')

    // When we go to the calendar, we don't need to see the link to go to the calendar or the button to send the diary entry to Firestore
    document.getElementById("goToCalendar").style.display = "block";
    document.getElementById("sendToFirestore").style.display = "block";
}

function transformWidgetToElement(key, widgetData) {
    if (widgetData.widgetType == null) {
        console.error('Widget data missing type:', widgetData);
        return null;
    }
    return createWidgetElement(widgetData.widgetType, widgetData);
}

// Always go to calendar on load
goToCalendar();
// goToDiary();

titleScreen = document.getElementById("titleScreen")
titleScreen.addEventListener('click', () => titleScreen.style.opacity = '0');
// If you want to remove it from the page after the fadeout
titleScreen.addEventListener('transitionend', () => titleScreen.remove());