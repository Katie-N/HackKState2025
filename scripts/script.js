console.log("Hello world")
Sortable.create(document.getElementById("widgetSelection"), { /* options */ });

function goToCalendar() {
    // change background to white wall
    document.body.style.setProperty('--backgroundBodyImage', "linear-gradient(rgba(221, 155, 133, 0.55), rgba(221, 155, 133, 0.55)), url('../assets/WhiteWallTexture.jpg')");
    console.log("Going to calendar");
    // change display of #diaryEntryScreen to none
    document.body.style.setProperty('--diaryEntryDisplay', 'none')

    // change display of #calendar to block
    document.body.style.setProperty('--calendarDisplay', 'block')

}
function goToDiary(date){
// change background to corkboard
    document.body.style.setProperty('--backgroundBodyImage', "url('../assets/BrownPaperBackground.jpg')");
    console.log("Going to diary");

    // change display of #diaryEntryScreen to block
    document.body.style.setProperty('--diaryEntryDisplay', 'block')

    // change display of #calendar to none
    document.body.style.setProperty('--calendarDisplay', 'none')

}

// Always go to calendar on load
goToCalendar();
document.getElementById("goToCalendar").addEventListener("click", goToCalendar);
document.getElementById("goToDiary").addEventListener("click", goToDiary);