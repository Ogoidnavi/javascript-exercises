const repeatString = function(string, num) {
    let repeated = ''; 
    let count = 0;
    if(num > 0)
    {
        while(count < num)
        {
            repeated += string;
            count++;
        }
    }
    else if(num < 0)
    {
        repeated = 'ERROR';
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
