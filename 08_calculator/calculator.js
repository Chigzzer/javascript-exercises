const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  
  const summed = a.reduce((total, number) => total + number, 0);

	return summed;
};

const multiply = function(a) {
  return a.reduce((total, number) => total * number, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let total = 1;
  for (let i = 1; i <= a; i++){
    total = total *  i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
