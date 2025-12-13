import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const bookTicketBtn = document.getElementById("bookTicketBtn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // ✅ User is logged in → show button
    bookTicketBtn.style.display = "inline-block";
  } else {
    // ❌ User not logged in → hide button
    bookTicketBtn.style.display = "none";
  }
});
