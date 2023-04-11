// Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.

function addNewItem() {
    const list = document.querySelector('#my-list');
    const textInput = prompt('Enter new item text');
    list.innerHTML += '<li>' + textInput + '</li>';
}
