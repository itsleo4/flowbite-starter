// js/auth.js

// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect automatically after success
      window.location.href = "login.html";
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect automatically after login
      window.location.href = "index.html";
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  });
}

// Show/hide UI on homepage based on login
const loginNav = document.getElementById("loginNav");
const registerNav = document.getElementById("registerNav");
const logoutNav = document.getElementById("logoutNav");
const userEmail = document.getElementById("userEmail");

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (loginNav) loginNav.style.display = "none";
    if (registerNav) registerNav.style.display = "none";
    if (logoutNav) logoutNav.style.display = "inline";
    if (userEmail) userEmail.innerText = user.email;
  } else {
    if (loginNav) loginNav.style.display = "inline";
    if (registerNav) registerNav.style.display = "inline";
    if (logoutNav) logoutNav.style.display = "none";
    if (userEmail) userEmail.innerText = "";
  }
});

// Logout
if (logoutNav) {
  logoutNav.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "index.html";
  });
}
