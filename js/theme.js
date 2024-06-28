const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.classList.add(savedTheme);
  document.getElementById("checkbox").checked = savedTheme === "dark";
  document.getElementById("theme-icon").textContent =
    savedTheme === "dark" ? "🌙" : "☀";
} else {
  localStorage.setItem("theme", "light");
  document.body.classList.add("light");
  document.getElementById("theme-icon").textContent = "☀";
}

document.getElementById("checkbox").addEventListener("change", function () {
  const isDarkMode = this.checked;
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  document.body.classList.toggle("dark", isDarkMode);
  document.body.classList.toggle("light", !isDarkMode);
  document.getElementById("theme-icon").textContent = isDarkMode ? "🌙" : "☀";
});
