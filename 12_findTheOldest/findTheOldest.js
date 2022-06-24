const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let oldest;
    let ageToCompare = 0;
    for (let i = 0; i < people.length; i++)
    {
        if(i === 0)
        {
            oldest = people[i];
        }
        else if(people[i - 1].yearOfDeath == null)
        {
            ageToCompare = people[i].yearOfDeath - people[i].yearOfBirth;
            oldestYet = currentYear - people[i-1].yearOfBirth;
            if(ageToCompare > oldestYet)
            {
                oldest = people[i];
            };
        }
        else if(people[i - 1].yearOfDeath == null)
        {
            ageToCompare = currentYear - people[i].yearOfBirth;
            oldestYet = people[i - 1].yearOfDeath - people[i-1].yearOfBirth;
            if(ageToCompare > oldestYet)
            {
                oldest = people[i];
            };
        }
        else
        {
            ageToCompare = people[i].yearOfDeath - people[i].yearOfBirth;
            oldestYet = people[i - 1].yearOfDeath - people[i-1].yearOfBirth;
            if(ageToCompare > oldestYet)
            {
                oldest = people[i];
            };
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
