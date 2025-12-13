import { auth } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const authButtons = document.getElementById("authButtons");
const profileSection = document.getElementById("profileSection");
const profileName = document.getElementById("profileName");
const profileSlider = document.getElementById("profileSlider");
const logoutBtn = document.getElementById("logoutBtn");

/* ================= AUTH STATE ================= */

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User logged in
//     authButtons.style.display = "none";
//     profileSection.style.display = "flex";

//     // Show email or username
//     profileName.textContent = user.email.split("@")[0];
//   } else {
//     // User logged out
//     authButtons.style.display = "flex";
//     profileSection.style.display = "none";
//   }
// });
onAuthStateChanged(auth, async (user) => {
  if (user) {
    authButtons.style.display = "none";
    profileSection.style.display = "flex";

    // 🔥 GET NAME FROM FIRESTORE
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (userDoc.exists()) {
      profileName.textContent = userDoc.data().fullName;
    } else {
      profileName.textContent = user.email;
    }
  } else {
    authButtons.style.display = "flex";
    profileSection.style.display = "none";
  }
});

/* ================= TOGGLE SLIDER ================= */

profileSection.addEventListener("click", () => {
  profileSlider.style.display =
    profileSlider.style.display === "flex" ? "none" : "flex";
});

/* ================= LOGOUT ================= */

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "home.html";
});


