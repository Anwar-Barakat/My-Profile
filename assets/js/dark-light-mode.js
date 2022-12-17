//? =========================== Dark/Light Mode  =========================
const themeButton = document.getElementById("theme-btn"),
  darkTheme = "dark-theme",
  iconTheme = "uil-sun",
  selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon");

const logo = document.querySelector(".logo img");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}
document.body.classList.contains("dark-theme")
  ? logo.classList.add("dark")
  : logo.classList.remove("dark");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  document.body.classList.contains("dark-theme")
    ? logo.classList.add("dark")
    : logo.classList.remove("dark");
});
//? =========================== Dark/Light Mode  =========================
