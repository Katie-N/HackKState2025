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
    calendar.appendChild(calendarCell)
}
