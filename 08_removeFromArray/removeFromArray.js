const removeFromArray = function (array, ...values) {
  // Approach #1 - Traditional for loop:
  //   let result = [];
  //   for (let item of array) {
  //     if (values.includes(item)) {
  //       continue;
  //     }
  //     result.push(item);
  //   }
  //   return result;

  // Approach #2 - Filter using reduce (unecessary complex maybe?):
  //   return array.reduce((newArray, currentItem) => {
  //     if (!values.includes(currentItem)) {
  //       newArray.push(currentItem);
  //     }
  //     return newArray;
  //   }, []);

  // Approach #3 - Best method is to use Array method filter:
  return array.filter((value) => !values.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
