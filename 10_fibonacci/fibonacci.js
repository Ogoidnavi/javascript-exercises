const fibonacci = function(num) {
    let currentNum = 0;
    let nextNum = 1;
    let total = 0;
    if(typeof num === "number")
    {
        total = num;
    }
    else if(typeof num === "string")
    {
        total = parseInt(num);
    }
    if(num >=0)
    {
        for(let i = 2; i <= num; i++)
        {
            total = currentNum + nextNum;
            currentNum = nextNum;
            nextNum = total;
        }
    }
    else
    {
        return "OOPS"
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
