const sumAll = function (a, b) {
  // TODO: see if this can be improved.
  // TODO: add comments

  // Return "ERROR" if any of the input arguments is not an integer
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

  // Return "ERROR" if any of the input arguments is less than zero
  if (a < 0 || b < 0) return "ERROR";

  const MIN = Math.min(a, b);
  const MAX = Math.max(a, b);

  const array = Array.from({ length: MAX - MIN + 1 }, (value, key) => k + MIN);
  return array.reduce((a, b) => a + b);
};

// Do not edit below this line
module.exports = sumAll;
