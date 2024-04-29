AOS.init();

const header = document.querySelector("header");

let lastY = 0;

window.addEventListener("scroll", function (event) {
  if (window.scrollY > lastY) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  lastY = window.scrollY;
});

// const element = document.querySelector(".card");
// const observer = new IntersectionObserver((entries) => {
//   element.classList.toggle("animation", entries[0].isIntersecting);
// });

// observer.observe(element);

const sliderWrapper = document.querySelector(".slides-wrapper");
let width = document.querySelector(".slide").clientWidth;
const dots = document.querySelectorAll(".dot");

window.addEventListener("resize", function () {
  width = document.querySelector(".slide").clientWidth;
});
console.log(dots);
let activeSlide = 0;

function handleCarousel() {
  sliderWrapper.style.transform = `translateX(-${width * (activeSlide % 4)}px)`;
  for (let i = 0; i < dots.length; i++) {
    if (activeSlide % 4 == i) {
      dots[i].style.backgroundColor = "white";
    } else {
      dots[i].style.backgroundColor = "transparent";
    }
  }
  activeSlide++;
}

setInterval(handleCarousel, 5000);

handleCarousel();
