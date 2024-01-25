// let currentInput = '';
// let currentOperation = null;
// let previousInput = null;

// function appendNumber(number) {
//     currentInput += number;
//     updateDisplay();
// }

// function setOperation(operation) {
//     if (currentOperation !== null) {
//         calculateResult();
//     }
//     currentOperation = operation;
//     previousInput = currentInput;
//     currentInput = '';
//     updateDisplay();
// }

// function calculateResult() {
//     if (currentOperation !== null && previousInput !== null && currentInput !== '') {
//         const num1 = parseFloat(previousInput);
//         const num2 = parseFloat(currentInput);
//         switch (currentOperation) {
//             case '+':
//                 currentInput = (num1 + num2).toString();
//                 break;
//             case '-':
//                 currentInput = (num1 - num2).toString();
//                 break;
//             case '*':
//                 currentInput = (num1 * num2).toString();
//                 break;
//             case '/':
//                 currentInput = (num1 / num2).toString();
//                 break;
//         }
//         currentOperation = null;
//         previousInput = null;
//         updateDisplay();
//     }
// }

// function clearDisplay() {
//     currentInput = '';
//     currentOperation = null;
//     previousInput = null;
//     updateDisplay();
// }

// function updateDisplay() {
//     document.getElementById('display').value = currentInput || '0';
// }




let currentInput = '';
let previousInput = null;
let currentOperation = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay()
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculateResult()
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = ''
    updateDisplay()
}

function calculateResult() {
    if (currentInput !== ''&& previousInput !== null && currentOperation !== null) {
        let num1 = parseFloat(currentInput);
        let num2 = parseFloat(previousInput);
        switch (currentOperation) {
            case '+': currentInput = (num2 + num1).toString();
            break
        case '-': currentInput = (num2 - num1).toString();
            break
        case '*': currentInput = (num2 * num1).toString();
            break
        case '/': currentInput = (num2 / num1).toString();
            break
        }
        previousInput = null;
        currentOperation = null;
        updateDisplay()
    }

}
function clearDisplay() {
    currentInput = '';
    previousInput = null;
    currentOperation = null;
    updateDisplay()
}

function updateDisplay() {
    document.getElementById('display').value = currentInput || '0';
}
