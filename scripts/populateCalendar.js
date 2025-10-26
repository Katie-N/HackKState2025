import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// This function deletes all days on the calendar
export function unpopulateCalendar() {
    let calendarDays = document.getElementById("calendarDaysContainer")
    calendarDays.innerHTML = ""
}

// This function takes a datetime object of a day and returns the zero indexed offset of its day of the week
// So a date that is a Sunday returns 0. A date that is a Saturday returns 6.
function getDayOffset(dayObj) {
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let weekday = dayObj.toLocaleString("en", { weekday: "long" })
    return weekdays.indexOf(weekday)
}

// This function takes a numeric (not string) month (1 for January, 12 for December) and a 4 digit year. 
// It returns the number of days in that month. 
// It accounts for leap years.
function numDaysInMonth(month, year) {
    // Handle every month besides February
    if (month==1||month==3||month==5||month==7||month==8||month==10||month==12) return 31;
    if (month==4||month==6||month==9||month==11) return 30;

    if (month != 2) return -1
    // Leap year logic for February
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) return 29
    return 28
}

let months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]

// This function is to fill the calendar with links to each diary entry. 
// Each day gets its own div that is positioned according to its real world position on a calendar. 
// It takes the numeric month (1 being January) and the digit year
// By default, it will use the current month and year unless parameters are passed.
export function populateCalendar(month = new Date().getMonth() + 1, year = 2025) {
    unpopulateCalendar()
    
    window.dateIdentifier = months[month-1] + " " + year;
    document.getElementById("dateIdentifierHeading").innerText = window.dateIdentifier;

    // We will just get dates for October 2025
    let calendarDays = document.getElementById("calendarDaysContainer")

    // For example, because October 1 2025 is a Wednesday, offset is 3
    // month - 1 because dates are zero indexed
    // The third parameter being a 1 means the first day of the month is selected.
    let offset = getDayOffset(new Date(year, month-1, 1))

    // Populate empty cells for offset. Don't let them be clickable.
    for (let i = 0; i < offset; i++) {
        let emptyCell = document.createElement("div")
        emptyCell.className = "calendarCell emptyCell"
        calendarDays.appendChild(emptyCell)
    }

    // Populate the days of the month
    for (let day = 1; day <= numDaysInMonth(month, year); day++) {
        let calendarCell = document.createElement("div")
        calendarCell.className = "calendarCell"
        calendarCell.innerText = day
        calendarCell.dataset.date = `${month}-${day.toString().padStart(2, '0')}-${year}` // Store date in dataset for later use
        calendarCell.addEventListener("click", goToDiary)

        // Check for diary entry and display avgRating if exists
        // This requires window.db and Firestore to be available
        if (window.db && window.firebaseInitialized && window.auth.currentUser) {
            (async () => {
                let dateKey = calendarCell.dataset.date;
                let docRef = doc(window.db, "users/" + window.auth.currentUser.uid + "/diaryEntries", dateKey);
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
        calendarDays.appendChild(calendarCell)
    }
}

// This function takes a month in numeric form (1 = January) and a 4 digit year
function changeMonth(month, year) {
    populateCalendar(month, year)
}

// Add event listeners to each month button on the calendar so that clicking it switches the month
let monthButtons = document.getElementById("calendarMonthsContainer").children
for (let i = 0; i < monthButtons.length; i++) {
    monthButtons[i].addEventListener("click", function() {
        changeMonth(this.dataset.month, 2025)
    })
}