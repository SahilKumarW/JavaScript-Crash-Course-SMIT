// Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.

function saveObjectToLocalStorage(obj) {
for (const prop in obj) {
    localStorage.setItem(prop, JSON.stringify(obj[prop]));
}
}

function getObjectFromLocalStorage() {
    const newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        newObj[key] = value;
    }
    return newObj;
}