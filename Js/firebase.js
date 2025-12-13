// Import Firebase from CDN (browser-friendly)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase configuration (your existing keys are OK)
const firebaseConfig = {
  apiKey: "AIzaSyDgPe5WFY6rS6D-cYSnQ25f0s6X6Y-oiqI",
  authDomain: "railmatrix-6487f.firebaseapp.com",
  projectId: "railmatrix-6487f",
  storageBucket: "railmatrix-6487f.appspot.com",
  messagingSenderId: "348864203506",
  appId: "1:348864203506:web:ec0b5c5424900c90061e6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth to use in other JS files
export const auth = getAuth(app);
export const db = getFirestore(app);
