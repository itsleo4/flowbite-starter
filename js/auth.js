// Firebase Auth Connection
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA5ahePpuAksgY6dDLfAtNuwGOwe4Xbe7E",
  authDomain: "luxflix-2455a.firebaseapp.com",
  projectId: "luxflix-2455a",
  storageBucket: "luxflix-2455a.appspot.com",
  messagingSenderId: "166343472796",
  appId: "1:166343472796:web:373b1fa92ef47305da1f59",
  measurementId: "G-4HSDMBK1BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Register
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("✅ Registration successful!");
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert("❌ Error: " + error.message);
      });
  });
}

// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("✅ Login successful!");
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert("❌ Login failed: " + error.message);
      });
  });
}
