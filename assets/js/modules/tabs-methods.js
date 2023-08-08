// Tabs Methods

let tabsMethods = {

    tabClear(tabs, buttons, cl) {
        tabs.forEach(item => item.classList.add("hidden"));
        buttons.forEach(item => item.classList.remove(cl));
    },

    tabToggle(buttons, tabs, cl) {
        const btnAttribute = event.currentTarget.getAttribute("data-direction");
        this.tabClear(tabs, buttons, cl);

        tabs.forEach(item => {
            if (item.getAttribute("data-direction") == btnAttribute) {
                item.classList.remove("hidden");
            }
        });
        this.setActiveBtn(event.currentTarget, cl);

        event.preventDefault();
    },

    setActiveBtn(btn, cl) {
        btn.classList.add(cl);
    },

}

export { tabsMethods };