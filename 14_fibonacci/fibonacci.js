const fibonacci = (number) => {
  number = parseInt(number);
  if (!number) {
    return 0;
  }

  if (number === 1) {
    return number;
  }

  if (number < 0) {
    return "OOPS";
  }

  let prev = 0;
  let result = 1;
  for (let i = 1; i < number; i++) {
    result = result + prev;
    prev = result - prev;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
