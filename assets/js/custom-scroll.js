ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".home-text p", { delay: 400, origin: "top" });
ScrollReveal().reveal(".home-text h,.header-top", {
  delay: 400,
  origin: "right",
});
ScrollReveal().reveal(".home-text h2,.nav-toggle", {
  delay: 600,
  origin: "left",
});
ScrollReveal().reveal(".home-text .btns", { delay: 800, origin: "bottom" });

ScrollReveal().reveal(".home-section .home-image", {
  delay: 500,
  origin: "bottom",
});

ScrollReveal().reveal(".socials li", {
  delay: 700,
  origin: "right",
  interval: 200,
});
