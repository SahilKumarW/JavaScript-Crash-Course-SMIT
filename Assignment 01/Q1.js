// Question: Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

num1 = Number(num1);
num2 = Number(num2);

if (num1 > num2) {
    console.log(num1 + " is larger!");
} else if (num2 > num1) {
    console.log(num2 + " is larger!");
} else {
    console.log("The two numbers are equal!");
}