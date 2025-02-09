import { clearDisplay, updateDisplay } from './ui.js';
import { calculate } from './calculator.js';
import { isNumber } from './helpers.js';

export function initEvents() {

    document.querySelectorAll('[class="calculator__button"]').forEach(button => {
        button.addEventListener('click', () => {
            const buttonPressed = button.textContent;
            const currentScreen = {
                'insertions': insertions.textContent,
                'results': results.textContent
            };

            if (isNumber(buttonPressed)) {
                if (!(currentScreen.insertions.length === 1 && buttonPressed == '0'))
                    updateDisplay(currentScreen.insertions + buttonPressed, null);
            }
            else if (buttonPressed == 'AC')
                clearDisplay();
            else if (buttonPressed == 'DEL' && currentScreen.insertions.length > 0)
                updateDisplay(currentScreen.insertions.substring(0,currentScreen.insertions.length - 1));
        })
    })
}