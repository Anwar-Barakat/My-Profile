//? =========================== Dark/Light Mode  =========================
const themeButton = document.getElementById("theme-btn");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

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

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());

    let logoImage = document.querySelector(".logo");
    logoImage.classList.toggle("light");
    if (logoImage.classList.contains("light")) {
        document.querySelector(".mode-text").innerHTML = "Dark Mode";

        logoImage.innerHTML =
            '<img src="https://i.postimg.cc/QCyRWB1P/IMG-20220826-172957-743-removebg-preview.png" alt="IMG-20220826-172957-743-removebg-preview"/>';
    } else {
        document.querySelector(".mode-text").innerHTML = "Light Mode";
        logoImage.innerHTML =
            '<img src="https://i.postimg.cc/Dz6pXJKg/IMG-20220826-173001-148-removebg-preview.png" alt="IMG-20220826-173001-148-removebg-preview"/>';
    }
});
//? =========================== Dark/Light Mode  =========================
