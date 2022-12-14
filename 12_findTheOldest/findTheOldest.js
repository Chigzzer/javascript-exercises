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

// Answer from solutions using reduce
/*
    const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })
    };

    const getAge = function(birth, death) {
        if (!death) {
            death = new Date().getFullYear();
        }   
        return death - birth;
    };
*/

// Do not edit below this line
module.exports = findTheOldest;
