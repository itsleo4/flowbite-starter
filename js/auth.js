// Firebase Auth Setup
const firebaseConfig = {
  apiKey: "AIzaSyA5ahePpuAksgY6dDLfAtNuwGOwe4Xbe7E",
  authDomain: "luxflix-2455a.firebaseapp.com",
  projectId: "luxflix-2455a",
  storageBucket: "luxflix-2455a.appspot.com",
  messagingSenderId: "166343472796",
  appId: "1:166343472796:web:373b1fa92ef47305da1f59",
  measurementId: "G-4HSDMBK1BR"
};

firebase.initializeApp(firebaseConfig);

// Register user
async function registerUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    alert("Registration successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
}

// Login user
async function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
}

// Logout user
function logoutUser() {
  firebase.auth().signOut().then(() => {
    alert("Logged out");
    window.location.href = "login.html";
  });
}

// Check auth state
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    document.getElementById("user-email")?.innerText = user.email;
  } else {
    if (window.location.pathname.includes("dashboard")) {
      window.location.href = "login.html";
    }
  }
});
