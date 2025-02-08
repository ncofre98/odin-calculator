import { clearDisplay, updateDisplay } from './ui.js';
import { calculate } from './calculator.js';
import { isNumber } from './helpers.js';

export function initEvents() {

    document.querySelectorAll('[class="calculator__button"]').forEach(button => {
        button.addEventListener('click', () => {
            const buttonPressed = button.textContent;
            const currentScreen = calculatorScreen.value;
            // console.log(buttonPressed);

            if (isNumber(buttonPressed)) {
                if (!(currentScreen.length === 1 && buttonPressed == '0'))
                    updateDisplay(currentScreen + buttonPressed);
            }
            else if (buttonPressed == 'AC')
                clearDisplay();
            else if (buttonPressed == 'DEL')
                updateDisplay(currentScreen.substring(0,currentScreen.length - 1));
        })
    })
}