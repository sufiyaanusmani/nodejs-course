const hobbies = ['Sports', 'Cooking'];

const copiedArray = hobbies.slice();
console.log(copiedArray);

const copiedArray2 = [...hobbies]; // Spread operator (can work with objects also by using {...object})
console.log(copiedArray2);

const toArray = (...args) => { // Rest operator (like *args in Python)
    return args;
}

console.log(toArray(1, 2, 3, 4, 5)); // Output: [1, 2, 3, 4, 5] (array)