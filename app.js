const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const equalsButton = document.querySelector(".button.equals");

let firstNumber = "";
let operator = "";
let secondNumber = "";

//notes: define clear function first
const clear = () => {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  display.textContent = "";
};

//notes: define calculate function
const calculate = () => {
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
  firstNumber = result.toString(); //notes:converts firstNumber back to string because textContent works with strings
  operator = ""; //notes:sets operator and secondNumber back to empty after returning the result
  secondNumber = "";
};

//notes: then add event listeners
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
      firstNumber += button.textContent; //+= appends string digit to firstNumber instead of replacing it
      display.textContent = firstNumber;
    } else {
      secondNumber += button.textContent;
      display.textContent = secondNumber;
    }
  });
});
equalsButton.addEventListener("click", () => {
  if (firstNumber && operator && secondNumber) {
    calculate();
  }
});
