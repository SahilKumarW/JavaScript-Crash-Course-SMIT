// Question: Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
let num3 = parseInt(prompt("Enter third number:"));
let num4 = parseInt(prompt("Enter fourth number:"));
let num5 = parseInt(prompt("Enter fifth number:"));

if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
    console.log(num1 + " is the largest number.");
} else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
    console.log(num2 + " is the largest number.");
} else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
    console.log(num3 + " is the largest number.");
} else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
    console.log(num4 + " is the largest number.");
} else {
    console.log(num5 + " is the largest number.");
}