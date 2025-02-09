export function updateDisplay(insertion = null, result = null) {
    if (insertion != null)
        insertions.textContent = insertion;
    if (result != null)
        results.textContent = result;
}

export function clearDisplay() {
    updateDisplay('', '0');
}

export function initUI() {
    clearDisplay();
}