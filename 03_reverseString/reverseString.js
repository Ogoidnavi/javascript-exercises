const reverseString = function(string) {
    let start = string.length-1;
    let end = string.length;
    let reverse = ''; 
    while(start >= 0)
    {
        let char = string.slice(start, end);
        reverse += char;
        start--;
        end--;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
