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
TO DO
1. Nothing is working! What does this error mean? "TypeError: null is not an object (evaluating 'inputBox.value = parseFloat(button.innerHTML)')"  Fix this error.
2. Now it works if I am adding. It seems like the add method could be simlified by making it an arrow function. Make that change. What happens? Why?
3. There is another problem with the calculator...I can only add single digit numbers currently...how can this be fixed? Fix it!
4. Add the code to make divide work.
*/
const calculator = {
  _number1: 0,
  _number2: 0,
  _operation: '',
  _inputOutput: document.getElementById('calcInput'),
  clear: function() {
    if (this._inputOutput.value == '') {
      //we want a deep clear...clear all properties, usually the second click of C
      this._operation = '';
      this._number1 = 0;
      this._number2 = 0;
    } else {
      //just clear the current display...usually the first click of C
      this._inputOutput.value = '';
    }
  },

  add: function() {
    return this._number1 + this._number2;
  },
  equal: function() {
    console.log(this);
    if (this._operation != '') {
      switch (this._operation) {
        case '+':
          this._inputOutput.value = this.add();
          break;
      }
    }
  },
  buttonClicked: function(button) {
    console.log(button);
    console.dir(button);

    let inputBox = this._inputOutput;

    switch (button.innerHTML) {
      case 'M':
        break;
      case 'C':
        calculator.clear();
        break;
      case '/':
        break;
      case 'X':
        break;
      case '-':
        break;
      case '+':
        this._operation = '+';
        break;
      case '=':
        this.equal();
        break;
      default:
        //if it made it to here it's a number
        inputBox.value = parseFloat(button.innerHTML);
        if (this._operation == '') {
          this._number1 = parseFloat(button.innerHTML);
        } else {
          this._number2 = parseFloat(button.innerHTML);
        }
    }
  }
};
// const buttonContainer = document.querySelector('.calcButtons');
// buttonContainer.addEventListener('touchend', e => {
//   console.log(e);
//   calculator.buttonClicked(e.target);
// });

// function buttonClicked(button) {
//   console.log(button);
//   debugger;

//   let inputBox = this.inputOutput;

//   switch (button.innerHTML) {
//     case 'M':
//       break;
//     case 'C':
//       this.clear();
//       break;
//     case '/':
//       break;
//     case 'X':
//       break;
//     case '-':
//       break;
//     case '+':
//       break;
//     case '=':
//       break;
//     default:
//       //if it made it to here it's a number
//       inputBox.value = inputBox.value + button.innerHTML;
//   }
// }
