const numberButtons = document.querySelectorAll(".button.number");

numberButtons.forEach((numberButton, index) => {
  const number = index + 1;
  numberButton.textContent = number; //note: sets visible text in number button
  numberButton.dataset.number = number; //note: sets a data-number attribute in HTML of the number button
});

// const secondButton = numberButtons[1];
// console.log(secondButton.textContent);

const display = document.querySelector(".display");
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    display.textContent = numberButton.textContent;
    console.log(display.textContent);
  });
});
