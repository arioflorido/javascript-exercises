const repeatString = function (string, timesToRepeatString) {
  if (timesToRepeatString < 0) {
    return "ERROR";
  }

  let result = "";
  for (let ctr = 0; ctr < timesToRepeatString; ctr++) {
    result += string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
