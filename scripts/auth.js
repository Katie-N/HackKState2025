import { getAuth, signInWithPopup, signInWithRedirect, onAuthStateChanged, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { populateCalendar, unpopulateCalendar } from "./populateCalendar.js";

window.auth = getAuth(window.app);
let production = true;

document.getElementById("signInButton").addEventListener("click", async () => {
    const userCred = null
    // signInWithRedirect doesn't work unless you setup a reverse proxy :(
    if (production == true) {
        console.log("trying to sign in")
        userCred = await signInWithRedirect(window.auth, new GoogleAuthProvider());

    } else {
        userCred = await signInWithPopup(window.auth, new GoogleAuthProvider());
    }
    console.log(userCred)
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