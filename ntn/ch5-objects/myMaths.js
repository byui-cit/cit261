const dice = {
  sides: 6,
  roll() {
    return Math.floor(this.sides * Math.random()) + 1;
  }
};

console.log(dice.roll());
//how does this even work?
console.log(Math.random());
//random number from 0 - 1.
console.log(Math.floor(Math.random()));
//hmm...always gives 0
console.log(Math.floor(Math.random()) + 1);
//always 1
console.log(Math.floor(2 * Math.random()));
//ahh...number from 0-1, so if we add 1 we will get the expected 1-2
console.log(Math.floor(2 * Math.random()) + 1);

//namespacing
const myMaths = {
  square(x) {
    return x * x;
  },
  mean(array, callback) {
    if (callback) {
      array.map(callback);
    }
    const total = array.reduce((a, b) => a + b);
    return total / array.length;
  }
};

//builtin objects

//JSON

//Math

//Date
