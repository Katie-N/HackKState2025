import { getAuth, onAuthStateChanged, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const auth = getAuth(window.app);

document.getElementById("signInButton").addEventListener("click", async () => {
  // signInWithRedirect doesn't work unless you setup a reverse proxy :(
  // signInWithRedirect(auth, new GoogleAuthProvider());
  const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
  console.log(userCred.user.uid)
  window.userId = userCred.user.uid
});

// This only works when using signInWithPopup (not signInWithRedirect)
// I was hoping I could get signInWithRedirect to work by using onAuthStateChanged instead of getRedirectResult but it doesn't :(
// The reason signInWithRedirect doesn't work is explained here https://firebase.google.com/docs/auth/web/redirect-best-practices
// onAuthStateChanged(auth, (user) => {
//     console.log("OnAuthStateChanged", user)
// });