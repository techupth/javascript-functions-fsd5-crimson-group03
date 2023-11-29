// Start coding here

const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

let calculator = {
  add: add,
  substract: substract,
  multiply: multiply,
  divide: divide,
};

let addResult = calculator.add;
let a = 10;
let b = 20;

console.log(addResult(a, b));

let divideResult = calculator.divide;
a = 3000;
b = 10;

console.log(divideResult(a, b));
