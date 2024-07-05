const person = {
    name: "Sufiyaan",
    age: 21,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person);
person.greet();