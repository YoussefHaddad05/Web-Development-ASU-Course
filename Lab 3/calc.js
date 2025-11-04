let currInput = null;
let operator = null;
let prevInput = null;

const screen = document.getElementById('display');

function updateDisplay() {
    screen.textContent = currInput || "0";
}

function appendNumber(num) {
    if (num === "." && currInput?.includes(".")) return;

    if (!currInput || currInput === "0") {
        currInput = num;
    } else {
        currInput += num;
    }

    updateDisplay();
}

function clearDisplay() {
    currInput = null;
    prevInput = null;
    operator = null;
    updateDisplay();
}

function toggleSign() {
    if (currInput) {
        currInput = (-1 * parseFloat(currInput)).toString();
        updateDisplay();
    }
}

function percent() {
    if (currInput) {
        currInput = (parseFloat(currInput) / 100).toString();
        updateDisplay();
    }
}

function setOperator(op) {
    if (currInput) {
        operator = op;
        prevInput = currInput;
        currInput = null;
    }
}

function calculate() {
    if (!prevInput || !operator || !currInput) return;

    const num1 = parseFloat(prevInput);
    const num2 = parseFloat(currInput);
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            screen.textContent = "Error";
            alert("Cannot divide by zero!");
            clearDisplay();
            return;
        }
        result = num1 / num2;
    }

    currInput = result.toString();
    prevInput = null;
    operator = null;
    updateDisplay();
}
