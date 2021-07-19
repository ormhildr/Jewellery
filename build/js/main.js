import Swiper from './vendor.js';

const body = document.body;
const navMain = document.querySelector(`.page-header__inner`);
const navToggle = navMain.querySelector(`.page-header__toggle`);

if (navMain !== null) {
  navMain.classList.remove(`page-header__inner--nojs`);
  navMain.classList.remove(`page-header__inner--closed-nojs`);
  navMain.classList.add(`page-header__inner--js`);

  navToggle.addEventListener(`click`, function () {
    navMain.classList.toggle(`page-header__inner--closed`);
    navMain.classList.toggle(`page-header__inner--opened`);
    if (navMain.classList.contains(`page-header__inner--opened`)) {
      body.style.overflow = `hidden`;
    }
    if (navMain.classList.contains(`page-header__inner--closed`)) {
      body.style.overflow = `visible`;
    }
  });
}

let swiper = new Swiper(`.swiper`, {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: `.swiper-pagination`,
    clickable: true,
    renderBullet(index, className) {
      return `<span class="` + className + `">` + (index + 1) + `</span>`;
    }
  },
  navigation: {
    nextEl: `.swiper-button-next`,
    prevEl: `.swiper-button-prev`,
  },
});

window.swiper = swiper;
