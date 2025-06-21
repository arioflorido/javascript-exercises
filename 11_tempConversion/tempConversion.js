function roundToOneDecimalplace(number) {
  return Math.round(number * 10) / 10;
}

const convertToCelsius = function (temperatureInFahrenheit) {
  return roundToOneDecimalplace((temperatureInFahrenheit - 32) * (5 / 9));
};

const convertToFahrenheit = function (temperatureInCelsius) {
  return roundToOneDecimalplace((temperatureInCelsius * 9) / 5) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
