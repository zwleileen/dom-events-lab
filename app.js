const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");

let firstNumber = "";
let operator = "";
let secondNumber = "";

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      display.textContent = "";
    } else {
      operator = button.textContent;
      display.textContent = operator;
    }
  });
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "") {
      firstNumber = button.textContent;
      display.textContent = firstNumber;
    } else {
      secondNumber = button.textContent;
      calculate();
    }
  });
});
function calculate() {
  result = Number(firstNumber) + Number(secondNumber);
}
