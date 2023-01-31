window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").classList.add("fade-out");
    window.scrollTo(0, 0);
  }, 1000);
});
// ! _______________________
// ! Toggle Navbar
// ! _______________________
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", (e) => {
  e.preventDefault();
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
  document.querySelector("header.header").classList.toggle("active");
}

// ! _______________________
// ! Active Section
// ! _______________________
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link") && e.target.hash != "") {
    document.querySelector(".overlay-effect").classList.add("active");
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      window.scrollTo(0, 0);
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      document.querySelector(".overlay-effect").classList.remove("active");
    }, 1000);
  }
});

// Toggle Overlay Effect :
function toggleOverlayEffect() {
  document.querySelector(".overlay-effect").classList.toggle("active");
}

// ! _______________________
// ! Change Website Color
// ! _______________________
let toggleBtn = document.querySelector(".setting-icon"),
  colorContainer = document.querySelector(".nav__color");

let colors = document.querySelectorAll(".colors-theme-list li");
for (i = 0; i < colors.length; i++) {
  colors[i].onclick = changeColor;
}

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("nav__color") ||
    e.target.classList.contains("setting-icon") ||
    e.target.classList.contains("colors")
  ) {
    colorContainer.classList.add("active");
  } else {
    colorContainer.classList.remove("active");
  }
});

const selectedColor = localStorage.getItem("selected-color");

if (selectedColor) {
  document.documentElement.style.setProperty("--hue-color", selectedColor);
}

function changeColor() {
  var color = this.getAttribute("data-color");

  localStorage.setItem("selected-color", color);
  document.documentElement.style.setProperty("--hue-color", color);
}

// ! _______________________
// ! Change About Tab
// ! _______________________
const tabsContainer = document.querySelector(".about-tabs"),
  aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");

    aboutSection.querySelector(target).classList.add("active");
  }
});

// ? _______________________
// ? Portfolio Popup
// ? _______________________
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-peoject")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body .description").innerHTML =
    portfolioItem.querySelector(".description").innerHTML;

  document.querySelector(".pp-body .general-info").innerHTML =
    portfolioItem.querySelector(".general-info").innerHTML;

  document.querySelector(".pp-thumbnail img").src =
    "assets/images/gallery/popup/" +
    portfolioItem
      .querySelector(".portfolio-item-thumbnail img")
      .getAttribute("data-popup");

  document.querySelector(".pp-thumbnail img").alt = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).alt;
}

document.querySelector(".pp-close").onclick = togglePortfolioPopup;

// hide popup when clicking out of it:
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) togglePortfolioPopup();
});

//?_______________________
//? Skeleton Script
//?_______________________
skeletons = document.querySelectorAll(".skeleton");
window.addEventListener("load", () => {
  skeletons.forEach((item) => {
    item.classList.remove("skeleton");
  });
});

// ! ===========================
// ! Filtering Works
// ! ===========================
let filters = document.querySelector(".filters");
let projects = document.querySelectorAll(".portfolio-item");

filters.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    // deactivate existing active ‘filter-item’
    filters.querySelector(".active").classList.remove("active");
    // activate new ‘filter-item’
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");

    projects.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});

//? =========================== Dark/Light Mode  =========================
const themeButton = document.getElementById("theme-btn"),
  darkTheme = "dark-theme",
  selectedTheme = localStorage.getItem("selected-theme"),
  darkText = document.querySelector(".mode-text"),
  selectedIcon = localStorage.getItem("selected-icon");

const logo = document.querySelector(".logo img");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

document.body.classList.contains("dark-theme")
  ? logo.classList.add("dark")
  : logo.classList.remove("dark");

document.body.classList.contains("dark-theme")
  ? (darkText.innerHTML = "Dark Mode")
  : (darkText.innerHTML = "Light Mode");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  document.body.classList.contains("dark-theme")
    ? logo.classList.add("dark")
    : logo.classList.remove("dark");

  document.body.classList.contains("dark-theme")
    ? (darkText.innerHTML = "Dark Mode")
    : (darkText.innerHTML = "Light Mode");
});
//? =========================== Dark/Light Mode  =========================

// Curson Animation on MouseMove
let cursor = document.querySelector(".cursor"),
  cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", (e) => {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top:" + e.clientY + "px;";
});
