const findTheOldest = function(people) {
    let age = [];
    for (let i = 0; i < people.length; i++){
        if (people[i].yearOfDeath == null){
            people[i].yearOfDeath = (new Date()).getFullYear();
        }
        age[i] = people[i].yearOfDeath - people[i].yearOfBirth;
    }
    let oldest = age.sort((a, b) => a < b ? 1:-1)[0];
    return people.find(person => (person.yearOfDeath - person.yearOfBirth) == oldest);
};

// Do not edit below this line
module.exports = findTheOldest;
