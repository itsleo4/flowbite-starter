// Firebase Auth
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA5ahePpuAksgY6dDLfAtNuwGOwe4Xbe7E",
  authDomain: "luxflix-2455a.firebaseapp.com",
  projectId: "luxflix-2455a",
  storageBucket: "luxflix-2455a.appspot.com",
  messagingSenderId: "166343472796",
  appId: "1:166343472796:web:373b1fa92ef47305da1f59",
  measurementId: "G-4HSDMBK1BR"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Track User Login State
onAuthStateChanged(auth, (user) => {
  const loginLink = document.getElementById("loginLink");
  const registerLink = document.getElementById("registerLink");
  const logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    // User is logged in
    if (loginLink) loginLink.style.display = "none";
    if (registerLink) registerLink.style.display = "none";
    if (logoutBtn) logoutBtn.classList.remove("hidden");
  } else {
    // User is logged out
    if (loginLink) loginLink.style.display = "inline-block";
    if (registerLink) registerLink.style.display = "inline-block";
    if (logoutBtn) logoutBtn.classList.add("hidden");
  }
});

// Handle Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        alert("✅ Logged out.");
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert("❌ Logout error: " + error.message);
      });
  });
}

// Login Form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector("#email");
    const password = e.target.querySelector("#password");
    const button = e.target.querySelector("button");

    button.disabled = true;
    button.textContent = "Logging in...";

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        alert("✅ Login successful!");
        window.location.href = "index.html";
      })
      .catch((err) => {
        alert("❌ " + err.message);
        button.disabled = false;
        button.textContent = "Login";
      });
  });
}

// Register Form
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector("#email");
    const password = e.target.querySelector("#password");
    const button = e.target.querySelector("button");

    button.disabled = true;
    button.textContent = "Registering...";

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        alert("✅ Registration complete!");
        window.location.href = "login.html";
      })
      .catch((err) => {
        alert("❌ " + err.message);
        button.disabled = false;
        button.textContent = "Register";
      });
  });
}
