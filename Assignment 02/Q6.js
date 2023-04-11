// Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

function saveObjectToLocal(key, obj) {
    const objString = JSON.stringify(obj);
    localStorage.setItem(key, objString);
}

const myObj = { name: 'Sahil', age: 19 };
saveObjectToLocal('myObjKey', myObj);