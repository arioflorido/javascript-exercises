const sumAll = function (a, b) {
  // Return "ERROR" if any of the input arguments is not an integer
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

  // Return "ERROR" if any of the input arguments is less than zero
  if (a < 0 || b < 0) return "ERROR";

  // Determine which is MIN and MAX in a,b
  const MIN = Math.min(a, b);
  const MAX = Math.max(a, b);

  // creates an array of numbers starting from MIN to MAX (inclusive).
  const array = Array.from(
    { length: MAX - MIN + 1 }, // Create an array-like object with the correct length (inclusive of both MIN and MAX)
    (value, key) => key + MIN // Map each index (key) to the actual value: MIN + index
  );

  // Sum All numbers in the Array
  return array.reduce((a, b) => a + b);
};

// Do not edit below this line
module.exports = sumAll;
