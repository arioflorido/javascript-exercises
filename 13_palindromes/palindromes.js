const palindromes = (string) => {
  function extractAlphanumeric(input) {
    return (input.match(/[a-z0-9]/gi) || []).join("");
  }

  const extractedAlphanumericString = extractAlphanumeric(string);

  let reverseString = "";
  Array.from(extractedAlphanumericString).forEach((char) => {
    reverseString = char + reverseString;
  });

  //   console.log(
  //     `RESULT ${extractedAlphanumericString.toLowerCase()} === ${reverseString.toLowerCase()}`
  //   );
  return (
    extractedAlphanumericString.toLowerCase() === reverseString.toLowerCase()
  );
};

// Do not edit below this line
module.exports = palindromes;
