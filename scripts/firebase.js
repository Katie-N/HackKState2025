// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyDy_MUOgD-8EpwDC3dwz4X0AxiOzc99O9I",
    authDomain: "howmanystars.netlify.app",
    projectId: "hack-kstate-2025-database",
    storageBucket: "hack-kstate-2025-database.firebasestorage.app",
    messagingSenderId: "309828879233",
    appId: "1:309828879233:web:a65e6c86cabd474a455e80",
    measurementId: "G-RZCN86FE9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
window.db = db; // Make db accessible globally for the populateCalendar.js script
const storage = getStorage(app);
window.firebaseStorage = storage; // Make storage accessible globally for the diaryEntryFirebaseFunctionality.js script

window.firebaseInitialized = true;