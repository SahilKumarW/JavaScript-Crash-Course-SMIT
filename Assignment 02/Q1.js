// Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

function createAdder(numberToAdd) {
    return function (num) {
        return num + numberToAdd;
    };
}

const addFive = createAdder(5);

console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25