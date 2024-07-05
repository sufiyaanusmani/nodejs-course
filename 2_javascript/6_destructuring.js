const printName = (person) => {
    console.log(person.name);
}

const printName2 = ({ name }) => { // Destructuring
    console.log(name);
}

const person = {
    name: "Sufiyaan",
    age: 21
};

printName(person);

const { name, age } = person; // Destructuring

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]