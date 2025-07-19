document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find((u) => u.email === email && u.password === password);

      if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        showToast("Login successful!");
        setTimeout(() => window.location.href = "index.html", 1500);
      } else {
        showToast("Invalid credentials.");
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = users.some((u) => u.email === email);
      if (userExists) {
        showToast("User already exists.");
        return;
      }

      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      showToast("Registration successful!");
      setTimeout(() => window.location.href = "login.html", 1500);
    });
  }

  const navbar = document.getElementById("navbar-links");
  if (navbar) {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      navbar.innerHTML = `
        <span class="text-white mr-4">Welcome, ${user.email}</span>
        <button onclick="logout()" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white">Logout</button>
      `;
    } else {
      navbar.innerHTML = `
        <a href="login.html" class="text-white hover:underline mr-4">Login</a>
        <a href="register.html" class="text-white hover:underline">Register</a>
      `;
    }
  }
});

function logout() {
  localStorage.removeItem("loggedInUser");
  location.reload();
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.innerText = message;
  toast.className = "fixed bottom-5 left-5 bg-blue-600 text-white px-4 py-2 rounded shadow-lg z-50 animate-bounce";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1500);
}
