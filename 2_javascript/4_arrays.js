const persons = ['Sufiyaan', 'Yousuf', 2];

for (let person of persons) {
    console.log(person);
}

console.log(persons.map(person => 'Name: ' + person));
console.log(persons);