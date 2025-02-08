export function updateDisplay(value) {
    calculatorScreen.value = value;
}

export function clearDisplay() {
    updateDisplay('0');
}

export function initUI() {
    clearDisplay();
}