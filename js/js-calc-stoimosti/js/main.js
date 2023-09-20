// эелементы формы
const squareInput = document.getElementById('square-input');
const squareRange = document.getElementById('square-range');
const inputs = document.querySelectorAll('input');

const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');

const basePrice = 6000;
const totalPriceElement = document.getElementById('total-price');


// связка range с текстовым полем

squareRange.addEventListener('input',  () => {
    squareInput.value = squareRange.value;
})

squareInput.addEventListener('input',  () => {
    squareRange.value = squareInput.value;
})

function calculate() {
    let totalPrice = basePrice * parseInt(squareRange.value);

    for (const radio of radioType) {
        if (radio.checked) {
            totalPrice *= parseFloat(radio.value);
        }
    }
    for (const radio of radioBuilding) {
        if (radio.checked) {
            totalPrice *= parseFloat(radio.value);
        }
    }
    for (const radio of radioRooms) {
        if (radio.checked) {
            totalPrice *= parseFloat(radio.value);
        }
    }

    if (ceilings.checked) {
        totalPrice*= parseFloat(ceilings.value);
    }

    if (walls.checked) {
        totalPrice*= parseFloat(walls.value);
    }

    if (floor.checked) {
        totalPrice*= parseFloat(floor.value);
    }

    const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText = formatter.format(totalPrice);
}

for (const input of inputs) {
    input.addEventListener('input', () => {
        calculate();
    })
}

calculate();


