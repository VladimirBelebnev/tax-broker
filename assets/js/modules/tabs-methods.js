// Tabs Methods

let tabsMethods = {

    tabClear(tabs, buttons, cl) {
        tabs.forEach(item => item.classList.add("hidden"));
        buttons.forEach(item => item.classList.remove(cl));
    },

    tabToggle(buttons, tabs, cl) {
        const btnNumber = Array.from(buttons).findIndex(item => item == event.currentTarget);
        this.tabClear(tabs, buttons, cl);

        tabs[btnNumber].classList.remove("hidden");
        this.setActiveBtn(event.currentTarget, cl);
    },

    setActiveBtn(btn, cl) {
        btn.classList.add(cl);
    },

}

export { tabsMethods };