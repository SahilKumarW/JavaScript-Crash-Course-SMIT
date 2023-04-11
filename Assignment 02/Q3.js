// Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.

function addParagraph(text) {
    document.body.innerHTML += '<p>' + text + '</p>';
}
addParagraph('I have done Q3 of the assignment!');