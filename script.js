const openBtn = document.querySelector("[data-btn-open]");
const closeBtn = document.querySelector("[data-btn-close]");
const modal = document.querySelector("[data-modal]");
const carousel = document.querySelector("[data-carousel]");
const indicator = document.querySelectorAll("[data-indicator]");
const languageBtn = document.querySelector("[data-language-btn]");
const languageSelected = document.querySelector("[data-selected]");
const languageMenu = document.querySelector("[data-language-menu]");
const languageOption = document.querySelectorAll("[data-language-option]");
const inputPay = document.querySelectorAll("[data-input-pay]");
const period = document.querySelectorAll("[data-period]");
const priceProfessional = document.querySelector("[data-price-pro]");
const pricePersonal = document.querySelector("[data-price-per]");

// Plan payment selector
inputPay.forEach((pay) => {
  pay.addEventListener("click", (e) => {
    if (e.target.textContent === "Pay Yearly") {
      pricePersonal.textContent = `ARS 2400.00 `;
      priceProfessional.textContent = `ARS 3000.00 `;
      period[0].textContent = `/ YEAR`;
      period[1].textContent = `/ YEAR`;
    } else {
      pricePersonal.textContent = `ARS 200.00 `;
      priceProfessional.textContent = `ARS 250.00 `;
      period[0].textContent = `/ MONTH`;
      period[1].textContent = `/ MONTH`;
    }
  });
});

// Language selector
languageBtn.addEventListener("click", () => {
  if (languageMenu.classList.contains("hidden")) {
    languageMenu.classList.remove("hidden");
    languageMenu.style.transform = `scaleY(1)`;
  } else {
    languageMenu.classList.add("hidden");
    languageMenu.style.transform = `scaleY(0)`;
  }
});

languageOption.forEach((option) => {
  option.addEventListener("click", (e) => {
    const text = e.target.textContent;
    languageSelected.textContent = `${text}`;
    languageMenu.classList.add("hidden");
    languageMenu.style.transform = `scaleY(0)`;
  });
});

// Menu open and close
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Carousel manually
indicator.forEach((point, i) => {
  point.addEventListener("click", () => {
    let position = i;
    let translate = position * -25;

    carousel.style.transform = `translateX(${translate}%)`;

    indicator.forEach((point, i) => {
      indicator[i].classList.remove("active");
    });

    indicator[i].classList.add("active");
  });
});

// Carousel automatic
let slideTranslate = 0;

function slide() {
  if (carousel === null) {
    return;
  }

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
