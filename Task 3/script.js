const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '0';
        } else if (value === '=') {
            if (currentInput && previousInput && operator) {
                currentInput = operate(previousInput, currentInput, operator);
                display.textContent = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (button.classList.contains('operator')) {
            if (currentInput) {
                if (previousInput) {
                    currentInput = operate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                }
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return (a + b).toString();
        case '-':
            return (a - b).toString();
        case '*':
            return (a * b).toString();
        case '/':
            return (a / b).toString();
        default:
            return '0';
    }
}
