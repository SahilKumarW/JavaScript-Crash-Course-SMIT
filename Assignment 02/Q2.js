// Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.

function searchArray(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(searchArray(array, 10)); // It will return true
console.log(searchArray(array, 0)); // It will return false