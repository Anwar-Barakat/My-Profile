(() => {
    const aboutSection = document.querySelector(".about-section"),
        tabsContent = document.querySelector(".about-tabs");

    tabsContent.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("tab-item") &&
            !e.target.classList.contains("active")
        ) {
            const target = e.target.getAttribute("data-target");

            tabsContent.querySelector(".active").classList.remove("active");

            e.target.classList.add("active");

            aboutSection
                .querySelector(".tab-content.active")
                .classList.remove("active");

            aboutSection.querySelector(target).classList.add("active");
        }
    });
})();
