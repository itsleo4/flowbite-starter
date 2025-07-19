// js/auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// 🔒 Replace these with **your actual Firebase project config**
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // ⚠️ Replace this
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🧠 Theme toggle logic
const themeToggleBtn = document.getElementById("themeToggle");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    root.classList.toggle("light");
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
    themeToggleBtn.innerHTML = root.classList.contains("dark") ? "☀️" : "🌙";
  });
}

// 🧠 User state management
onAuthStateChanged(auth, (user) => {
  const loginLink = document.getElementById("loginLink");
  const registerLink = document.getElementById("registerLink");
  const profileLink = document.getElementById("profileLink");
  const logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    // logged in
    loginLink?.classList.add("hidden");
    registerLink?.classList.add("hidden");
    profileLink?.classList.remove("hidden");
    logoutBtn?.classList.remove("hidden");
  } else {
    loginLink?.classList.remove("hidden");
    registerLink?.classList.remove("hidden");
    profileLink?.classList.add("hidden");
    logoutBtn?.classList.add("hidden");
  }
});

// 🧠 Login/Register Handling
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const logoutBtn = document.getElementById("logoutBtn");

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registered successfully");
        window.location.href = "index.html";
      } catch (error) {
        alert(error.message);
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully");
        window.location.href = "index.html";
      } catch (error) {
        alert(error.message);
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      signOut(auth).then(() => {
        alert("Logged out");
        window.location.reload();
      });
    });
  }
});
