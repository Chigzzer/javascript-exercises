const convertToCelsius = function(temperature) {
  let newTemp = (temperature - 32) / 1.8;
  return Math.round( newTemp * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  let newTemp = temperature * 1.8 + 32;
  return Math.round( newTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
