// Import

import { dropDownMethods } from "./modules/drop-down-methods.js";
import { tabsMethods } from "./modules/tabs-methods.js";
import { modalMethods } from "./modules/modal-methods.js";

// Drop-down Variables

const headerDropDowns = document.querySelectorAll(".header__drop-down");
const headerToggleBtns = document.querySelectorAll(".header__link_drop-down");
const calculatorToggleBtns = document.querySelectorAll(".calculator-1__input");

// Tabs Variables

const packetsTabButtons = document.querySelectorAll(".packets__button");
const packetsTabs = document.querySelectorAll(".packets__items");
const packetTabButtons = document.querySelectorAll(".packet__button");

// Modal Windows Variables

const headerModal = document.querySelector(".header-modal");
const headerOpenBtn = document.querySelector(".header__open-modal-btn");
const footerOpenBtn = document.querySelector(".footer__open-modal-btn");
const headerSkipBtn = document.querySelector(".header-modal__skip-btn");
const modals = document.querySelectorAll(".modal-1");
const serviceModal1 = document.querySelector(".modal-1_first");
const serviceModal2 = document.querySelector(".modal-1_second");
const serviceModal3 = document.querySelector(".modal-1_third");
const serviceModal4 = document.querySelector(".modal-1_fourth");
const service1Buttons = [document.querySelector(".header__btn"),
                        document.querySelector(".header__calculator-btn"),
                        document.querySelector(".header-modal__calculator-btn"),
                        document.querySelector(".footer__calculator-btn")];
const service2Buttons = document.querySelectorAll(".service__btn");
const service3Btn = document.querySelector(".modal-1__btn");
const service4Btn = document.querySelector(".modal-1__btn_white");
const skipButtons = document.querySelectorAll(".modal-1__skip-btn");

// Pop-up Variables

const popUpButtons = document.querySelectorAll(".packets__additional-info-btn");

// Range-input Styles

const inputs = document.querySelectorAll("input[type=range]");

// Event Listeners

headerToggleBtns.forEach(item => {

    item?.addEventListener("click", (event) => {
        const btnNumber = Array.from(headerToggleBtns).findIndex(item => item == event.currentTarget);
        const currentDropDown = headerDropDowns[btnNumber];

        dropDownMethods.toggleDropDown(currentDropDown, "hidden");

        event.preventDefault();
    });

});

calculatorToggleBtns.forEach(item => {

    item?.addEventListener("click", (event) => {
        const clickedElement = event.currentTarget;
        const currentDropDown = clickedElement.children[1];

        dropDownMethods.toggleDropDown(currentDropDown, "hidden");
        clickedElement.classList.toggle("calculator-1__input_active");

        event.preventDefault();
    });

});

packetsTabButtons.forEach(item => {

    item?.addEventListener("click", () => {
        const currentTabs = Array.from(event.currentTarget
            .parentElement
            .parentElement
            .parentElement
            .parentElement
            .querySelectorAll(".packets__items"));

        tabsMethods.tabToggle(packetsTabButtons, currentTabs, "packets__button_active");
    });

});

packetTabButtons.forEach(item => {

    item?.addEventListener("click", (event) => {
        const currentTabs = Array.from(event.currentTarget
                                .parentElement
                                .parentElement
                                .nextElementSibling
                                .children);
        const currentButtons = Array.from(event.currentTarget
                                .parentElement
                                .parentElement
                                .children).map(item => item.children[0]);

        
        tabsMethods.tabToggle(currentButtons, currentTabs, "packet__button_active");
    });

});

headerOpenBtn?.addEventListener("click", () => {
    modalMethods.openModal(headerModal, "hidden");
});

footerOpenBtn?.addEventListener("click", () => {
    modalMethods.openModal(headerModal, "hidden");
});

headerSkipBtn?.addEventListener("click", () => {
    modalMethods.hiddenModal(headerModal, "hidden");
});

popUpButtons.forEach(item => {

    item?.addEventListener("click", (event) => {
        const popUp = event.currentTarget.nextElementSibling;

        modalMethods.toggleModal(popUp, "hidden");
    });

});

service1Buttons.forEach(item => {

    item?.addEventListener("click", () => {
        modalMethods.openModal(serviceModal1, "hidden");
    });

});

skipButtons.forEach(item => {

    item?.addEventListener("click", () => {
        modalMethods.hiddenAllModals([headerModal, ...modals], "hidden");
    });

});

service2Buttons.forEach(item => {

    item?.addEventListener("click", () => {
        modalMethods.openModal(serviceModal3, "hidden");
    });

});

service3Btn?.addEventListener("click", () => {

    modalMethods.hiddenAllModals([headerModal, ...modals], "hidden");
    modalMethods.openModal(serviceModal2, "hidden");

});

service4Btn?.addEventListener("click", () => {

    modalMethods.hiddenAllModals([headerModal, ...modals], "hidden");
    modalMethods.openModal(serviceModal1, "hidden");

});

modals.forEach(item => {

    item?.addEventListener("click", (event) => {
        if (event.target == event.currentTarget.children[0]) {
            modalMethods.hiddenAllModals([headerModal, ...modals], "hidden");
        }
    });

});

// Sliders

const firstSlider = new Swiper(".companies__slider", {
    direction: "horizontal",
    loop: true,

    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
        nextEl: ".companies__slider-btn_right",
        prevEl: ".companies__slider-btn_left",
    },

    breakpoints: {

        790: {
            slidesPerView: 2,
        }

    }
});

const secondSlider = new Swiper(".develop-slider__slider", {
    direction: "horizontal",
    loop: true,

    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
        nextEl: ".develop-slider__slider-btn_right",
        prevEl: ".develop-slider__slider-btn_left",
    },

    breakpoints: {

        550: {
            slidesPerView: 2,
        }

    }
});