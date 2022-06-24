const getTheTitles = function(books) {
    let array = [];
    for(key in books)
    {
        array.push(books[key].title);
    }
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
