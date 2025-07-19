// js/auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // REPLACE THIS
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "XXXXX",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register
const regForm = document.getElementById("registerForm");
if (regForm) {
  regForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      window.location.href = "index.html";
    } catch (err) {
      alert(err.message);
    }
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      window.location.href = "index.html";
    } catch (err) {
      alert(err.message);
    }
  });
}

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth);
  });
}

// Check login
onAuthStateChanged(auth, (user) => {
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userEmail = document.getElementById("userEmail");

  if (user) {
    if (loginBtn) loginBtn.style.display = "none";
    if (registerBtn) registerBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "block";
    if (userEmail) {
      userEmail.style.display = "block";
      userEmail.textContent = user.email;
    }
  } else {
    if (loginBtn) loginBtn.style.display = "inline";
    if (registerBtn) registerBtn.style.display = "inline";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (userEmail) userEmail.style.display = "none";
  }
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });

  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.classList.add(savedTheme);
}
