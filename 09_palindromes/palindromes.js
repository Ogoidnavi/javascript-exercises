const palindromes = function (string) {
    const noSpecialCharacters = string.replace(/[^a-zA-Z0-9]/g, '');
    const lower = noSpecialCharacters.toLowerCase();
    let length = lower.length;
    for(let i = 0; i < length/2; i++)
    {
        if(lower[i] != lower[length - 1 - i])
        {
            return false;
        }
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;
