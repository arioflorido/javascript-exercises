const add = (a, b) => a + b;

const subtract = (...args) => args.reduce((a, b) => a - b);

const sum = (args) => args.reduce((a, b) => a + b, 0);

const multiply = (args) => args.reduce((a, b) => a * b);

const power = (value, power) => value ** power;

const factorial = (value) => {
  let product = 1;
  for (let number = 1; number <= value; number++) {
    product *= number;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
