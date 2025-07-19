// ✅ js/auth.js (Create this new file in your js folder)

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const auth = getAuth();

// Register logic
if (window.location.pathname.includes("register.html")) {
  const registerForm = document.getElementById("register-form");
  registerForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = registerForm["email"].value;
    const password = registerForm["password"].value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Registered successfully!");
        window.location.href = "login.html";
      })
      .catch((err) => alert(err.message));
  });
}

// Login logic
if (window.location.pathname.includes("login.html")) {
  const loginForm = document.getElementById("login-form");
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm["email"].value;
    const password = loginForm["password"].value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Logged in!");
        window.location.href = "index.html";
      })
      .catch((err) => alert(err.message));
  });
}

// Display user status
onAuthStateChanged(auth, (user) => {
  const userStatus = document.getElementById("user-status");
  if (user && userStatus) {
    userStatus.innerHTML = `👋 Welcome, ${user.email} | <a href="#" id="logout" class="underline">Logout</a>`;
    document.getElementById("logout")?.addEventListener("click", () => {
      signOut(auth);
    });
  }
});
