console.log("Hello world")

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