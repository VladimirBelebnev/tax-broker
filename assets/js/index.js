// Import

import { dropDownMethods } from "./modules/drop-down-methods.js";
import { tabsMethods } from "./modules/tabs-methods.js";

// Drop-down Variables

const headerDropDowns = document.querySelectorAll(".header__drop-down");
const headerToggleBtns = document.querySelectorAll(".header__link_drop-down");
const calculatorToggleBtns = document.querySelectorAll(".calculator-1__input");

// Tabs Variables

const packetsTabButtons = document.querySelectorAll(".packets__button");
const packetsTabs = document.querySelectorAll(".packets__items");
const packetTabButtons = document.querySelectorAll(".packet__button");
const packetTabs = document.querySelectorAll(".packet__price");

// Range-input Styles

const inputs = document.querySelectorAll("input[type=range]");

// Event Listeners

headerToggleBtns.forEach(item => {

    item.addEventListener("click", (event) => {
        const btnNumber = Array.from(headerToggleBtns).findIndex(item => item == event.currentTarget);
        const currentDropDown = headerDropDowns[btnNumber];

        dropDownMethods.toggleDropDown(currentDropDown, "hidden");

        event.preventDefault();
    });

});

calculatorToggleBtns.forEach(item => {

    item.addEventListener("click", (event) => {
        const clickedElement = event.currentTarget;
        const currentDropDown = clickedElement.children[1];

        dropDownMethods.toggleDropDown(currentDropDown, "hidden");

        event.preventDefault();
    });

});

packetsTabButtons.forEach(item => {

    item.addEventListener("click", () => {
        tabsMethods.tabToggle(packetsTabButtons, packetsTabs, "packets__button_active");
    });

});

packetTabButtons.forEach(item => {

    item.addEventListener("click", () => {
        tabsMethods.tabToggle(packetTabButtons, packetTabs, "packet__button_active");
    });

});

inputs.forEach(item => {
    noUiSlider.create(item, {
        start: [10],
        range: {
            'min': [10],
            'max': [100]
        }
    });
});