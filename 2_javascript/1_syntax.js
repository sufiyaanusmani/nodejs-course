var name = "Sufiyaan";
var age = 21;
var hasHobbies = false;

function summarizeUser(userName, userAge, userHasHobby){
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}

console.log(name);
console.log(summarizeUser(name, age, hasHobbies));

// var: creates new variable (outdated)
// let: creates new variable (modern)
// const: creates new constant

const name = "Sufiyaan";
let age = 21;
let hasHobbies = false;