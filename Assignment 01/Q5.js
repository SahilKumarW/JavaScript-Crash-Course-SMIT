// Question: Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.

let marks = [80, 70, 90, 60, 85];

let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

let average = sum / marks.length;
let grade;

switch (true) {
    case average >= 90:
        grade = "A";
        break;
    case average >= 80:
        grade = "B";
        break;
    case average >= 70:
        grade = "C";
        break;
    case average >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}

// RESULT
console.log("The average marks are ${average} and the grade is ${grade}");