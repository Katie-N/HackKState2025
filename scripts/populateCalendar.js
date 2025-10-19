// We will just get dates for October 2025
calendar = document.getElementById("calendar")
offset = 3 // Because October 1, 2025 is a Wednesday
// Populate empty cells for offset. Don't let them be clickable.
for (let i = 0; i < offset; i++) {
    let emptyCell = document.createElement("div")
    emptyCell.className = "calendarCell emptyCell"
    calendar.appendChild(emptyCell)
}

// Populate the days of the month
for (let day = 1; day <= 31; day++) {
    let calendarCell = document.createElement("div")
    calendarCell.className = "calendarCell"
    calendarCell.innerText = day
    calendarCell.dataset.date = `10-${day.toString().padStart(2, '0')}-2025` // Store date in dataset for later use
    calendarCell.addEventListener("click", goToDiary)

    // Check for diary entry and display avgRating if exists
    // This requires window.db and Firestore to be available
    if (window.db && window.firebaseInitialized) {
        (async () => {
            const { doc, getDoc } = window.firestoreFns;
            let dateKey = calendarCell.dataset.date;
            console.log(dateKey);
            let docRef = doc(window.db, "diaryEntries", dateKey);
            let docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                let data = docSnap.data();
                if (data.avgRating !== undefined) {
                    let ratingDiv = document.createElement('div');
                    ratingDiv.className = 'calendarAvgRating';
                    ratingDiv.innerText = `⭐${data.avgRating}`;
                    calendarCell.appendChild(ratingDiv);
                }
            }
        })();
    }
    calendar.appendChild(calendarCell)
}
