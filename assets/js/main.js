// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      gsap.to(slide, { opacity: i === index ? 1 : 0, duration: 1 });
    });
  }

  function startSlideshow() {
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 3000);
  }

  showSlide(current);
  startSlideshow();

  gsap.utils.toArray("section").forEach(section => {
    if (!section.querySelector("#hero-slideshow")) {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      });
    }
  });
});