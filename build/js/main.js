import Swiper from './vendor.js';

const body = document.body;

const navMain = document.querySelector(`.page-header__inner`);
const navToggle = navMain.querySelector(`.page-header__toggle`);

const faqLinks = document.querySelectorAll(`.page-faq__link`);

const catalogFieldsets = document.querySelectorAll(`.page-catalog__filter-fieldset`);

const clearFilter = document.querySelector(`.page-catalog__filter-button--clear`);

const getClearFilter = () => {
  const filterInputs = document.querySelectorAll(`.page-catalog__filter-option input`);

  clearFilter.addEventListener(`click`, () => {
    Array.from(filterInputs).forEach((link) => {
      link.checked = false;
    });
  });
};

if (catalogFieldsets !== null && clearFilter !== null) {
  getClearFilter();
}

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

if (faqLinks !== null) {
  Array.from(faqLinks).forEach((link) => {
    link.classList.remove(`page-faq__link--opened`);
    link.classList.remove(`page-faq__link--opened-nojs`);
    link.classList.add(`page-faq__link--closed`);

    link.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      link.classList.toggle(`page-faq__link--opened`);
      link.classList.toggle(`page-faq__link--closed`);
    });
  });
}

if (catalogFieldsets !== null) {
  Array.from(catalogFieldsets).forEach((link) => {
    const catalogFilterTitle = link.querySelector(`.page-catalog__filter-title`);

    link.classList.remove(`page-catalog__filter-fieldset--opened`);
    link.classList.remove(`page-catalog__filter-fieldset--opened-nojs`);
    link.classList.add(`page-catalog__filter-fieldset--closed`);

    catalogFilterTitle.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      link.classList.toggle(`page-catalog__filter-fieldset--opened`);
      link.classList.toggle(`page-catalog__filter-fieldset--closed`);
    });
  });
}

let swiper = new Swiper(`.swiper`, {
  spaceBetween: 30,
  pagination: {
    el: `.swiper-pagination`,
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        type: `fraction`,
        renderFraction(currentClass, totalClass) {
          return `<span class="` + currentClass + `"></span>` +
            ` of ` +
            `<span class="` + totalClass + `"></span>`;
        }
      }
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        type: `bullets`,
        renderBullet(index, className) {
          return `<span class="` + className + `">` + (index + 1) + `</span>`;
        }
      }
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      pagination: {
        type: `bullets`,
        renderBullet(index, className) {
          return `<span class="` + className + `">` + (index + 1) + `</span>`;
        }
      }
    }
  },
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: `.swiper-button-next`,
    prevEl: `.swiper-button-prev`,
  }
});

window.swiper = swiper;
