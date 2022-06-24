const sumAll = function(num1, num2) {
    let diff = 0;
    let sum = 0;
    if(typeof(num1) === "number" && typeof(num2) === "number")
    {
        if(num1 < 0 || num2 < 0)
        {
            return 'ERROR';
        } 
        else if(num1 > num2)
        {
            diff = num1 - num2;
            for(let i = 0; i <= diff; i++)
            {
                sum += num2;
                num2++;
            }
            return sum;
        }
        else if(num1 < num2)
        {
            diff = num2 - num1;
            for(let i = 0; i <= diff; i++)
            {
                sum += num1;
                num1++;
            }
            return sum;
        }
    }
    else
    {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
