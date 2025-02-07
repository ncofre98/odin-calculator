export function updateDisplay(value) {
    calculatorScreen.textContent = value;
}

export function clearDisplay() {
    updateDisplay('0');
}

export function initUI() {
    clearDisplay();
}