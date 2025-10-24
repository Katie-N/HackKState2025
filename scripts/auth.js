import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { populateCalendar, unpopulateCalendar } from "./populateCalendar.js";

window.auth = getAuth(window.app);

document.getElementById("signInButton").addEventListener("click", async () => {
    // signInWithRedirect doesn't work unless you setup a reverse proxy :(
    // signInWithRedirect(auth, new GoogleAuthProvider());
    const userCred = await signInWithPopup(window.auth, new GoogleAuthProvider());
    window.userId = userCred.user.uid
    if (document.getElementById("optionsContainer").classList.contains("show")) {
        toggleShow()
    }
});

// This only works when using signInWithPopup (not signInWithRedirect)
// I was hoping I could get signInWithRedirect to work by using onAuthStateChanged instead of getRedirectResult but it doesn't :(
// The reason signInWithRedirect doesn't work is explained here https://firebase.google.com/docs/auth/web/redirect-best-practices
onAuthStateChanged(auth, (user) => {
    // When the user signs in, the calendar should be repopulated with the new user
    if (user) {
        populateCalendar()
    } else {
        unpopulateCalendar()
    }
});