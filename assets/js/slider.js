// Range-input Styles

const inputs = document.querySelectorAll(".input-range");

inputs.forEach(item => {
    noUiSlider.create(item, {
        start: [10],
        range: {
            'min': [10],
            'max': [100]
        },
        tooltips: true,
        animate: true,
        connect: [true, false],
        pips: {
            mode: 'steps',
            density: 3,
        }
    });
});