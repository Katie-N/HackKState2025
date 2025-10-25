import { getAuth, signInWithPopup, signInWithRedirect, getRedirectResult, onAuthStateChanged, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { populateCalendar, unpopulateCalendar } from "./populateCalendar.js";

window.auth = getAuth(window.app);

function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) || (window.innerWidth <= 768 && window.innerHeight <= 1024);
}

document.getElementById("signInButton").addEventListener("click", async () => {
    if (isMobileDevice()) {
        // signInWithRedirect doesn't work unless you setup a reverse proxy :(
        // So I switched from GitHub pages to Netlify and added the _redirects file (plus I changed the auth domain in the firebase config and in the firebase console. And I changed the google cloud OAuth client redirect URIs and authorized JavaScript origins.)
        signInWithRedirect(auth, new GoogleAuthProvider());
    } else {
        await signInWithPopup(window.auth, new GoogleAuthProvider())
        if (document.getElementById("optionsContainer").classList.contains("show")) {
            toggleShow()
        }
    }
});

// This only works when using signInWithPopup (not signInWithRedirect)
// I was hoping I could get signInWithRedirect to work by using onAuthStateChanged instead of getRedirectResult but it doesn't :(
// The reason signInWithRedirect doesn't work is explained here https://firebase.google.com/docs/auth/web/redirect-best-practices
onAuthStateChanged(auth, (user) => {
    // When the user signs in, the calendar should be repopulated with the new user
    if (user) {
        console.log("onAuthStateChanged", user)
        window.userId = user.uid
        populateCalendar()
    } else {
        unpopulateCalendar()
    }
});

// try {
//     const result = await getRedirectResult(auth);
//     if (result) {
//       // This means a redirect sign-in just completed successfully.
//       const user = result.user;
//       console.log("Redirect sign-in successful:", user);
//       // The onAuthStateChanged listener above will also be triggered with this user.
//     } else {
//       // No redirect result found, meaning it's either a fresh page load
//       // or the user was already signed in (handled by onAuthStateChanged).
//     }
// } catch (error) {
//     console.error("Error getting redirect result:", error);
// }