const reverseString = function (string) {
  // Approach #1 - using BIF reverse() function (DUH):
  // return string.split("").reverse().join("");

  // Approach #2 - using traditional for loop:
  //   let result = "";
  //   for (let index = string.length - 1; index >= 0; index--) {
  //     result += string[index];
  //   }

  //  Approach #3 - using reduce Array Method:
  let result = Array.from(string).reduce(
    (currentValue, char) => (currentValue = `${char}${currentValue}`),
    ""
  );
  return result;
};

// Do not edit below this line
module.exports = reverseString;
