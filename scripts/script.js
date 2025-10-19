console.log("Hello world")

// Functions to transform widgets into their editable versions
// Unified widget creation and transformation
function createWidgetElement(type, data = {}) {
    const element = document.createElement('li');
    element.className = 'widget-base widget-container';
    if (type === 'note') {
        // Note widget
        const textarea = document.createElement('textarea');
        textarea.className = 'note-widget';
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
        input.placeholder = 'Paste your song link here...';
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
    starContainer = document.createElement('div')
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
        // If the new element was added below the empty widget, move it above instead
        const emptyWidget = widgetsForDays.querySelector(".emptyWidget");
        widgetsForDays.appendChild(emptyWidget);

        // Replace the icon with the correct widget element
        const newElement = event.item;
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
 });

function goToCalendar() {
    console.log("Going to calendar");

    // change background to white wall
    document.body.style.setProperty('--backgroundBodyImage', "linear-gradient(rgba(221, 155, 133, 0.55), rgba(221, 155, 133, 0.55)), url('../assets/WhiteWallTexture.jpg')");
    // change display of #diaryEntryScreen to none
    document.body.style.setProperty('--diaryEntryDisplay', 'none')
    // change display of #calendar to block
    document.body.style.setProperty('--calendarDisplay', 'block')
    
    // When we go to the calendar, we don't need to see the link to go to the calendar or the button to send the diary entry to Firestore
    document.getElementById("goToCalendar").style.display = "none";
    document.getElementById("sendToFirestore").style.display = "none";
}

function goToDiary(date){
    console.log("Going to diary");

    // change background to corkboard
    document.body.style.setProperty('--backgroundBodyImage', "url('../assets/BrownPaperBackground.jpg')");
    // change display of #diaryEntryScreen to block
    document.body.style.setProperty('--diaryEntryDisplay', 'block')
    // change display of #calendar to none
    document.body.style.setProperty('--calendarDisplay', 'none')

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