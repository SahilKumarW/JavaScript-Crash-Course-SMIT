// Question: Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.

let num = prompt("Enter a number:");
let sign = (num > 0) ? "+" : (num < 0) ? "-" : "zero";
alert("The sign is " + sign);