import { updateDisplay } from './ui.js';
import { calculate } from './calculator.js';

export function initEvents() {
    document.querySelectorAll('.calculator__button').forEach(button => {
        button.addEventListener('click', () => {
            updateDisplay(calculate(button.textContent));
        })
    })
}