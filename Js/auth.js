import { auth ,db} from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ================= REGISTER ================= */

const registerForm = document.getElementById("registerForm");
const regError = document.getElementById("regError");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

//   const email = document.getElementById("regEmail").value;
//   const password = document.getElementById("regPassword").value;
//   const confirmPassword = document.getElementById("confirmPassword").value;
// ✅ GET STRING VALUES (NOT ELEMENTS)
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;


  if (password !== confirmPassword) {
    regError.style.display = "block";
    return;
  }

  regError.style.display = "none";

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    alert("Registration successful 🎉");
    // ✅ SAVE CLEAN DATA TO FIRESTORE
    await setDoc(doc(db, "users", userCredential.user.uid), {
      fullName: fullName, // STRING ✔
      email: email, // STRING ✔
      createdAt: new Date(),
    });

    // ✅ REDIRECT AFTER REGISTER
    window.location.href = "home.html";
    registerForm.reset();
  } catch (error) {
    alert(error.message);
  }
});

/* ================= LOGIN ================= */

const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful ✅");
    // ✅ REDIRECT AFTER REGISTER
    window.location.href = "home.html";
    loginForm.reset();

    // Optional redirect
    // window.location.href = "booking.html";
  } catch (error) {
    loginError.style.display = "block";
  }
});
