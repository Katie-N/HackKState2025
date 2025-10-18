console.log("Hello world")

// Functions to transform widgets into their editable versions
// Unified widget creation and transformation
function createWidgetElement(type, data = {}) {
    console.log(data)
    const element = document.createElement('li');
    element.className = 'widget-base';
    if (type === 'note') {
        // Note widget
        const textarea = document.createElement('textarea');
        textarea.className = 'note-widget';
        textarea.placeholder = 'Write your note here...';
        if (data.value) textarea.value = data.value;
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
        // Populate the song name if it is coming from Firebase
        if (data.songName) input.value = data.songName;
        const preview = document.createElement('div');
        preview.className = 'song-preview';
        container.appendChild(input);
        container.appendChild(preview);
        element.innerHTML = '';
        element.appendChild(container);
    }
    return element;
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

function transformWidgetToElement(key, widgetData) {
    if (widgetData.widgetType == null) {
        console.error('Widget data missing type:', widgetData);
        return null;
    }
    return createWidgetElement(widgetData.widgetType, widgetData);
}

// Always go to calendar on load
// goToCalendar();
// Right now I'm working on the diary entry page so I will skip the hassle of clicking the button and just go to it first thing
goToDiary();
// document.getElementById("goToCalendar").addEventListener("click", goToCalendar);
// document.getElementById("goToDiary").addEventListener("click", goToDiary);