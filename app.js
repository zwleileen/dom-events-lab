const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const equalsButton = document.querySelector(".button.equals");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function clear() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  display.textContent = "";
}

function calculate() {
  let result;
  switch (operator) {
    case "+":
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case "-":
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case "*":
      result = Number(firstNumber) * Number(secondNumber);
      break;
    case "/":
      result = Number(firstNumber) / Number(secondNumber);
      break;
  }
  display.textContent = result;
  firstNumber = result.toString(); //converts firstNumber back to string
  operator = "";
  secondNumber = "";
}

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      clear(); //notes: resets everything to its starting state
    } else {
      operator = button.textContent;
      display.textContent = operator;
    }
  });
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "" || operator === "=") {
      firstNumber = button.textContent;
      display.textContent = firstNumber;
    } else {
      secondNumber = button.textContent;
      display.textContent = secondNumber;
    }
  });
});
equalsButton.addEventListener("click", () => {
  if (firstNumber && operator && secondNumber) {
    calculate();
  }
});
