console.log("Hello world")

// Functions to transform widgets into their editable versions
function transformToNoteWidget(element) {
    // Create a textarea for notes
    const textarea = document.createElement('textarea');
    textarea.className = 'note-widget';
    textarea.placeholder = 'Write your note here...';
    
    // Replace the content of the element with the textarea
    element.innerHTML = '';
    element.appendChild(textarea);
    element.className = 'widget-base';
}

function transformToImageWidget(element) {
    // Create an image input container
    const container = document.createElement('div');
    container.className = 'image-widget widget-base';

    // Create the image preview
    const img = document.createElement('img');
    img.style.display = 'none'; // Initially hidden

    // Create the file input
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    // Create a button to trigger file selection
    const button = document.createElement('button');
    button.textContent = 'Select Image';

    // Add event listeners
    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                img.src = e.target.result;
                img.style.display = 'block';
                button.textContent = 'Change Image';
            };
            reader.readAsDataURL(file);
        }
    });

    button.addEventListener('click', () => input.click());

    // Assemble the widget
    container.appendChild(img);
    container.appendChild(input);
    container.appendChild(button);

    // Replace the content of the element
    element.innerHTML = '';
    element.appendChild(container);
}

function transformToSongWidget(element) {
    // Create a song input container
    const container = document.createElement('div');
    container.className = 'song-widget widget-base';

    // Create the input for song URL/link
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Paste your song link here...';

    // Create preview area (could be expanded to show embedded players for supported platforms)
    const preview = document.createElement('div');
    preview.className = 'song-preview';

    // Assemble the widget
    container.appendChild(input);
    container.appendChild(preview);

    // Replace the content of the element
    element.innerHTML = '';
    element.appendChild(container);
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
        if (widgetsForDays.lastChild.classList.contains("emptyWidget") === false) {
            el = widgetsForDays.querySelector(".emptyWidget") 
            widgetsForDays.appendChild(el);
        }

        // Transform the widget based on its type
        const newElement = event.item;
        const imgElement = newElement.querySelector('img');
        if (imgElement) {
            const imgSrc = imgElement.src;
            if (imgSrc.includes('notepad.png')) {
                transformToNoteWidget(newElement);
            } else if (imgSrc.includes('camera.png')) {
                transformToImageWidget(newElement);
            } else if (imgSrc.includes('music-player.png')) {
                transformToSongWidget(newElement);
            }
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

}
function goToDiary(date){
    console.log("Going to diary");

// change background to corkboard
    document.body.style.setProperty('--backgroundBodyImage', "url('../assets/BrownPaperBackground.jpg')");
    // change display of #diaryEntryScreen to block
    document.body.style.setProperty('--diaryEntryDisplay', 'block')
    // change display of #calendar to none
    document.body.style.setProperty('--calendarDisplay', 'none')

}

// Always go to calendar on load
// goToCalendar();
// Right now I'm working on the diary entry page so I will skip the hassle of clicking the button and just go to it first thing
goToDiary();
document.getElementById("goToCalendar").addEventListener("click", goToCalendar);
document.getElementById("goToDiary").addEventListener("click", goToDiary);