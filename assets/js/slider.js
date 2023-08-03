// Range-input Styles

const inputs = document.querySelectorAll("input[type=range]");

inputs.forEach(item => {
    noUiSlider.create(item, {
        start: [10],
        range: {
            'min': [10],
            'max': [100]
        },
        pips: {
            mode: 'steps',
            density: 3,
        }
    });
});