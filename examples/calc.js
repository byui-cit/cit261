const calculator = {
  _number1: 0,
  _number2: 0,
  _operation: '',
  _inputOutput: document.getElementById('calcInput'),
  clear: function() {
    this._inputOutput.value = '';
  },
  buttonClicked: function(button) {
    console.log(button);
    console.dir(button);

    let inputBox = this._inputOutput;

    switch (button.target.innerHTML) {
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
        break;
      case '=':
        break;
      default:
        //if it made it to here it's a number
        inputBox.value = inputBox.value + button.innerHTML;
    }
  }
};
// const buttonContainer = document.querySelector('.calcButtons');
// buttonContainer.addEventListener('touchend', calculator.buttonClicked);

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
