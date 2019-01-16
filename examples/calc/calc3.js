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

1. Now it works if I am adding. Just like we did with calc2...make the add method an arrow function. What happens this time? Why?
2. Notice all of the 'this' references. how does 'this' work with objects and methods?
3. This is a simple way to build objects for OOP in javascript.  There are a couple of problems however. Try adding this line at the bottom of your code: calculator._inputOutput.value = "aaaa";  That really should be private and not able to be changed outside of the methods of the object...but we can!  Convention in Javascript says that properties named with a leading _ should NOT be modified directly...but it is only convention.  Another problem would arise if we needed LOTS of calculators...this would not be an efficient way to do that.
4. Below the calculater object is a bunch of commented out code. It is an example of what this object might look like as a Constructor Function. Notice the differences.  One big one is that the private members are really private.  buttonClicked is the only public member...so it's better, but still not ideal if we needed lots of calculators.
*/
const calculator = {
  _number1: 0,
  _number2: 0,
  _operation: '',
  _inputOutput: document.getElementById('calcInput'),
  clear: function() {
    if (this._inputOutput.value == '') {
      // we want a deep clear...clear all properties, usually the second click of C
      this._operation = '';
      this._number1 = 0;
      this._number2 = 0;
    } else {
      // just clear the current display...usually the first click of C
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
    // notice the difference in the output between console.log and console.dir
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

// Constructor function
// function Calculator() {
//   // All of these properties and methods will be private
//   let number1 = 0;
//   let number2 = 0;
//   let operation = '';
//   let inputOutput = document.getElementById('calcInput');

//   function clear() {
//     if (inputOutput.value == '') {
//       // we want a deep clear...clear all properties, usually the second click of C
//       operation = '';
//       number1 = 0;
//       number2 = 0;
//     } else {
//       // just clear the current display...usually the first click of C
//       inputOutput.value = '';
//     }
//   }

//   function add() {
//     return number1 + number2;
//   }
//   function equal() {
//     console.log(this);
//     if (operation != '') {
//       switch (operation) {
//         case '+':
//           inputOutput.value = add();
//           break;
//       }
//     }
//   }
//   // This object will have access to the private members...and will be able to be called outside of the function.
//   return {
//     buttonClicked: button => {
//       // notice the difference in the output between console.log and console.dir
//       console.log(button);
//       console.dir(button);

//       let inputBox = inputOutput;

//       switch (button.innerHTML) {
//         case 'M':
//           break;
//         case 'C':
//           clear();
//           break;
//         case '/':
//           break;
//         case 'X':
//           break;
//         case '-':
//           break;
//         case '+':
//           operation = '+';
//           break;
//         case '=':
//           equal();
//           break;
//         default:
//           //if it made it to here it's a number
//           inputBox.value = parseFloat(button.innerHTML);
//           if (operation == '') {
//             number1 = parseFloat(button.innerHTML);
//           } else {
//             number2 = parseFloat(button.innerHTML);
//           }
//       }
//     }
//   };
// }
// const calculator = new Calculator();
