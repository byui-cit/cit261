/*
Calculator steps
wait for a button to be clicked.
  check which button it was
  if it was a number
    check to see if we have a current operation.
      if yes...this should be the second number...store the number as number2
      if no...this is the first number...store it.
  if it was an operation
    store the operation
  if it was equal
    check to make sure we have a current number1, number2, and operation
      if yes...perform the operation, display the result, clear operation and number2
      if no...error.
We will need:
  a way to store number1, number2, operation
  an add function
  equal function
  function to handle a button click
  function to handle all of the other operations

TO DO
1. Nothing is working! If you click a button you get the following error. What does it mean? "TypeError: null is not an object (evaluating 'inputBox.value = parseFloat(button.innerHTML)')"  Fix this error.
2. Now it works if I am adding. It seems like the add method could be simplified by making it an arrow function. Make that change.
3. There is another problem with the calculator...I can only add single digit numbers currently...how can this be fixed? Fix it!
4. Add the code to make divide work.
*/
const calculator = {
  number1: 0,
  number2: 0,
  operation: '',
  inputOutput: document.getElementById('calcInput')
};

const add = function() {
  return calculator.number1 + calculator.number2;
};

const equal = function() {
  console.log(calculator);
  if (calculator.operation != '') {
    switch (calculator.operation) {
      case '+':
        calculator.inputOutput.value = add();
        break;
    }
  }
};

const buttonClicked = function(button) {
  // notice the difference in the output between console.log and console.dir
  console.log(button);
  console.dir(button);

  let inputBox = calculator.inputOutput;

  switch (button.innerHTML) {
    case 'M':
      break;
    case 'C':
      clear();
      break;
    case '/':
      break;
    case 'X':
      break;
    case '-':
      break;
    case '+':
      calculator.operation = '+';
      break;
    case '=':
      equal();
      break;
    default:
      //if it made it to here it's a number
      inputBox.value = parseFloat(button.innerHTML);
      if (calculator.operation == '') {
        calculator.number1 = parseFloat(button.innerHTML);
      } else {
        calculator.number2 = parseFloat(button.innerHTML);
      }
  }
};
// why can we use this function before it is declared? hoisting
function clear() {
  if (calculator.inputOutput.value == '') {
    // we want a deep clear...clear all properties, usually the second click of C
    calculator.operation = '';
    calculator.number1 = 0;
    calculator.number2 = 0;
  } else {
    // just clear the current display...usually the first click of C
    calculator.inputOutput.value = '';
  }
}
// const buttonContainer = document.querySelector('.calcButtons');
// buttonContainer.addEventListener('touchend', e => {
//   console.log(e);
//   calculator.buttonClicked(e.target);
// });
