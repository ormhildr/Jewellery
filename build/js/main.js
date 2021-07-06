'use strict';

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
