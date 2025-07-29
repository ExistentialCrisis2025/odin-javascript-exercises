const convertToCelsius = function(n) {
  n -= 32;
  n *= 5;
  n /= 9;
  return roundNumber(n,1)
};

const convertToFahrenheit = function(n) {
  n*=9;
  n/=5;
  n+=32;
  return roundNumber(n,1);
};

function roundNumber(n,dec){
  return Math.round(n * Math.pow(10,dec)) / Math.pow(10,dec);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
