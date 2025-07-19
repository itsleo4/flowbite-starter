// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register
window.registerUser = function() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(user => alert("Registered!"))
    .catch(err => alert(err.message));
};

// Login
window.loginUser = function() {
  const email = document.getElementById("logEmail").value;
  const password = document.getElementById("logPassword").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(user => alert("Logged in!"))
    .catch(err => alert(err.message));
};

// Logout
window.logoutUser = function() {
  signOut(auth);
};

// Auto update UI
onAuthStateChanged(auth, user => {
  if (user) {
    document.getElementById("userStatus").textContent = `Logged in as: ${user.email}`;
  } else {
    document.getElementById("userStatus").textContent = "Not Logged In";
  }
});
