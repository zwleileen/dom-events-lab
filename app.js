const buttons = document.querySelectorAll(".button");

// numberButtons.forEach((numberButton) => {
//   //   numberButton.textContent = number; //note: sets visible text in number button
//   //   numberButton.dataset.number = number; //note: sets a data-number attribute in HTML of the number button
// });

// const secondButton = numberButtons[1];
// console.log(secondButton.textContent);

const display = document.querySelector(".display");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      display.textContent = "0";
    } else {
      display.textContent = button.textContent;
    }
  });
});

const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll("button.operator");

let sum = 0;
// console.log(numberButtons[1].textContent);
numberButtons.addEventListener("click", () => {
  sum += Number(numberButtons); //convert button's textcontent to a number
});
