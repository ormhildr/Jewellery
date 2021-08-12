import Swiper from './vendor.js';

const body = document.body;

const navMain = document.querySelector(`.page-header__inner`);
const navToggle = navMain.querySelector(`.page-header__toggle`);

const faqLinks = document.querySelectorAll(`.page-faq__link`);

const catalogFieldsets = document.querySelectorAll(`.page-catalog__filter-fieldset`);

const clearFilter = document.querySelector(`.page-catalog__filter-button--clear`);

const filterCatalog = document.querySelector(`.page-catalog__filter`);
const filterMobile = document.querySelector(`.page-catalog__summon-button`);
const filterOverlay = document.querySelector(`.page-catalog__filter-overlay`);

const filterClose = document.querySelector(`.page-catalog__filter-close`);

const modalFormOpened = document.querySelectorAll(`.page-header__login`);
const modalFormWindow = document.querySelector(`.modal-form`);
const modalFormClosed = modalFormWindow.querySelector(`.modal__close`);
const modalFormOverlay = modalFormWindow.querySelector(`.modal__overlay`);

const modalCartOpened = document.querySelector(`.item-card__button`);

if (document.querySelector(`.modal-cart`)) {
  const modalCartWindow = document.querySelector(`.modal-cart`);
  const modalCartClosed = modalCartWindow.querySelector(`.modal__close`);
  const modalCartOverlay = modalCartWindow.querySelector(`.modal__overlay`);

  const openCartModal = (evt) => {
    evt.preventDefault();
    modalCartWindow.classList.add(`modal--active`);
    body.style.overflow = `hidden`;
  };

  const closeCartModal = () => {
    modalCartWindow.classList.remove(`modal--active`);
    body.style.overflow = `visible`;
  };

  if (modalCartWindow !== null && modalCartOpened !== null && modalCartClosed !== null && modalCartOverlay !== null) {
    modalCartOpened.addEventListener(`click`, openCartModal);
    modalCartClosed.addEventListener(`click`, closeCartModal);
    modalCartOverlay.addEventListener(`click`, closeCartModal);

    window.addEventListener(`keydown`, function (evt) {
      if (evt.keyCode === 27) {
        if (modalCartWindow.classList.contains(`modal--active`)) {
          evt.preventDefault();
          closeCartModal();
        }
      }
    });
  }
}

const openFormModal = (evt) => {
  evt.preventDefault();
  modalFormWindow.classList.add(`modal--active`);
  body.style.overflow = `hidden`;
};

const closeFormModal = () => {
  modalFormWindow.classList.remove(`modal--active`);
  body.style.overflow = `visible`;
};

if (modalFormWindow !== null && modalFormOpened !== null && modalFormClosed !== null && modalFormOverlay !== null) {
  Array.from(modalFormOpened).forEach((link) => {
    link.addEventListener(`click`, openFormModal);
  });
  modalFormClosed.addEventListener(`click`, closeFormModal);
  modalFormOverlay.addEventListener(`click`, closeFormModal);

  window.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === 27) {
      if (modalFormWindow.classList.contains(`modal--active`)) {
        evt.preventDefault();
        closeFormModal();
      }
    }
  });

  const form = modalFormWindow.querySelector(`form`);
  const formMail = form.querySelector(`input[name=email]`);

  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    localStorage.setItem(`email`, formMail.value);
  });
}

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

if (filterMobile !== null && filterCatalog !== null) {
  filterMobile.addEventListener(`click`, () => {
    body.style.overflow = `hidden`;
    filterOverlay.classList.add(`page-catalog__filter-overlay--active`);
    filterCatalog.style.display = `block`;
    filterCatalog.classList.add(`page-catalog__filter--mobile`);

    filterClose.addEventListener(`click`, () => {
      body.style.overflow = `visible`;
      filterOverlay.classList.remove(`page-catalog__filter-overlay--active`);
      filterCatalog.style.display = `none`;
      filterCatalog.classList.remove(`page-catalog__filter--mobile`);
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
