var roundDate = require("round-date");

function getRandomInt(min, max) {
  var roundedDate = roundDate.round(455 * 60, new Date());  min = Math.ceil(min);
  console.log(roundedDate);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Finding the maximum of two numbers
const maximumNumber = (num1, num2) => {
  return Math.max(num1, num2);
};

module.exports = maximumNumber;
