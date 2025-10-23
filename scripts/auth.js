import { getAuth, getRedirectResult, signInWithRedirect, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
// const auth = getAuth();

// function signIn() {
//     const provider = new GoogleAuthProvider();
//     signInWithRedirect(auth, provider)
// }
// document.getElementById("signInButton").addEventListener("click", signIn)

// getRedirectResult(auth).then((result) => {
//     if (result) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         window.user = result.user;
//         console.log(result.user)
//     }    
// }).catch((error) => {
//     console.log(error)
//     // // Handle Errors here.
//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     // // The AuthCredential type that was used.
//     // const credential = GoogleAuthProvider.credentialFromError(error);
    
// });

const provider = new GoogleAuthProvider();
const auth = getAuth(window.app);

document.getElementById("signInButton").addEventListener("click", () => {
  signInWithRedirect(auth, provider);
});

// After redirect back to your site:
getRedirectResult(auth)
  .then((result) => {
    if (result) {
      console.log("Signing in");
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("User:", user);
    }
  })
  .catch((error) => {
    console.log("ERROR", error);
  });