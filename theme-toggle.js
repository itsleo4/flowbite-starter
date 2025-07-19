// theme-toggle.js
const btn = document.getElementById("theme-toggle");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  btn.textContent = document.body.classList.contains("dark-theme") ? "🌙" : "🌞";
});
