const numberButtons = document.querySelectorAll(".button.number");

numberButtons.forEach((numberbutton, index) => {
  const number = index + 1;
  numberbutton.textContent = number; //note: sets visible text in number button
  numberbutton.dataset.number = number; //note: sets a data-number attribute in HTML of the number button
});

const secondButton = numberButtons[1];
console.log(secondButton.textContent);
