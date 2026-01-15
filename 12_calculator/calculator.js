const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	let total = 0;
  for(let element of a){
    total += element;
  }
  return total;
};

const multiply = function(a) {
  let prod = 1;
  for(let element of a){
    prod *= element;
  }
  return prod;
};

const power = function(a,b) {
	let prod = 1;
  for(let i=0;i<b;i++){
    prod *= a;
  }

  return prod;
};

const factorial = function(a) {
	let total = 1;
  if(a == 0 || a == 1){
    return 1;
  }
  for(i=2;i<=a;i++){
    total*=i;
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
