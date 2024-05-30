let currentSlide = 0;
const slides = document.querySelectorAll(".slide img");
const navButtons = document.querySelectorAll(".slider-nav button");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${-index * 100}%)`;
    navButtons[i].classList.toggle("active", i === index);
  });
}

navButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    showSlide(i);
    currentSlide = i;
  });
});

// Auto-slide every 3 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);
