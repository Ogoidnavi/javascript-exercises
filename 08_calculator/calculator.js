const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	if(toString.call(array) !== "[object Array]")
    return false;

      let total = 0;
      for(let i = 0; i < array.length; i++)
      {
        if(isNaN(array[i]))
        {
          continue;
        }
        else
        {
          total += Number(array[i]);
        }
      }
      return total;
};

const multiply = function(array) {
  if(toString.call(array) !== "[object Array]")
    return false;

      let total = 0;
      for(let i = 0; i < array.length; i++)
      {
        if(isNaN(array[i]))
        {
          continue;
        }
        else if (total == 0)
        {
          total = Number(array[i]);
        }
        else
        {
          total =total * Number(array[i]); 
        }
      }
      return total;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if(num == 0 || num == 1)
  {
    return 1
  }
  else
  {
    return num * factorial(num - 1);
  }
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
