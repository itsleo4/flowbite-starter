// toggle-theme.js
window.toggleTheme = function () {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.textContent = "🌞";
    localStorage.setItem("theme", "light");
  }
};

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("theme-icon").textContent = "🌙";
  } else {
    document.getElementById("theme-icon").textContent = "🌞";
  }
}
