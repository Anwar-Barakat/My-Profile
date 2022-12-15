window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").classList.add("fade-out");
    window.scrollTo(0, 0);
  }, 3000);
});
// ! ===========================
// ! Toggle Navbar
// ! ===========================
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

// ! ===========================
// ! Active Section
// ! ===========================
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

// ! ===========================
// ! Change Website Color
// ! ===========================
let toggleBtn = document.querySelector(".setting-icon"),
  colorContainer = document.querySelector(".nav__color");

toggleBtn.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("setting-icon") ||
    e.target.classList.contains("fa-spin")
  )
    colorContainer.classList.toggle("active");
  else if (
    !e.target.classList.contains("nav__colors") ||
    !e.target.classList.contains("colors") ||
    !e.target.classList.contains("change-color")
  ) {
    colorContainer.classList.remove("active");
  }
});

var colors = document.getElementsByClassName("change-color");
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

var style = getComputedStyle(document.body).getPropertyValue("--hue-color");

function changeColor() {
  var color = this.getAttribute("data-color");
  var style = getComputedStyle(document.body).getPropertyValue("--hue-color");

  localStorage.setItem("selected-color", style);
  document.documentElement.style.setProperty("--hue-color", color);
}

// ! ===========================
// ! Change About Tab
// ! ===========================
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

// ! ===========================
// ! Portfolio Popup
// ! ===========================
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
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body .description").innerHTML =
    portfolioItem.querySelector(".description").innerHTML;

  document.querySelector(".pp-body .general-info").innerHTML =
    portfolioItem.querySelector(".general-info").innerHTML;
}

document.querySelector(".pp-close").onclick = togglePortfolioPopup;

// hide popup when clicking out of it:
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) togglePortfolioPopup();
});
