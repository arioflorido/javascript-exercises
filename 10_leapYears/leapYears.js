const leapYears = function (year) {
  // Approach #1 - kinda confusing
  //   if (year % 100 === 0 && year % 400 !== 0) {
  //     return false;
  //   }
  //   return year % 4 === 0;

  // Approach #2 - clearer and more descriptive approach
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  if (isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
