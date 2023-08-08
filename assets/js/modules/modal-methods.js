// Drop-down Methods

let modalMethods = {
    
    toggleModal(element, cl) {
        element?.classList.toggle(cl);
        event.preventDefault();
    },
    
    openModal(element, cl) {
        element?.classList.remove(cl);
        event.preventDefault();
    },

    hiddenModal(element, cl) {
        element?.classList.add(cl);
        event.preventDefault();
    },

    hiddenAllModals(elements, cl) {
        elements.forEach(item => item?.classList.add(cl));
        event.preventDefault();
    }

}

export { modalMethods };