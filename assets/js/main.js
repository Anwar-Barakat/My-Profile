//? =========================== Change Website Color  ====================
let toggleBtn = document.querySelector(".nav__color-icon"),
  colorContainer = document.querySelector(".nav__color");

toggleBtn.addEventListener("click", () => {
  colorContainer.classList.toggle("active");
});

var colors = document.getElementsByClassName("change-color");
for (i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", changeColor);
}

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
//? =========================== Change Website Color  ====================
