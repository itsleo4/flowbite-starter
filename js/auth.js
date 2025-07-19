// auth.js
import { auth } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

// Register
window.registerUser = async function () {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registered Successfully!");
    window.location.href = "index.html";
  } catch (error) {
    alert("Registration Error: " + error.message);
  }
}

// Login
window.loginUser = async function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful!");
    window.location.href = "index.html";
  } catch (error) {
    alert("Login Error: " + error.message);
  }
}

// Logout
window.logoutUser = async function () {
  await signOut(auth);
  alert("Logged out!");
  window.location.href = "login.html";
}
