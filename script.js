const openBtn = document.querySelector("[data-btn-open]");
const closeBtn = document.querySelector("[data-btn-close]");
const modal = document.querySelector("[data-modal]");
const carousel = document.querySelector("[data-carousel]");
const indicator = document.querySelectorAll("[data-indicator]");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

indicator.forEach((point, i) => {
  point.addEventListener("click", (e) => {
    let position = i;
    let translate = position * -25;

    carousel.style.transform = `translateX(${translate}%)`;

    indicator.forEach((point, i) => {
      indicator[i].classList.remove("active");
    });

    indicator[i].classList.add("active");
  });
});

let slideTranslate = 0;

function slide() {
  if (slideTranslate > 3) {
    slideTranslate = 0;
  }
  translate = slideTranslate * -25;
  carousel.style.transform = `translateX(${translate}%)`;

  indicator.forEach((point, i) => {
    indicator[i].classList.remove("active");
  });

  indicator[slideTranslate].classList.add("active");
  slideTranslate++;
}

setInterval(slide, 4000);
