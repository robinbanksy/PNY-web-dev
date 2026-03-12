// Programming and JavaScript Basics

// We can use the 'let' keyword to declare variables in JavaScript.
let number1 = 5;
let number2 = 10;

// console.log() is used to print output to the terminal.
// We can perform arithmetic operations like addition on variables.
console.log(number1 + number2);

number1 = 20; // We can reassign values to variables declared with 'let'.
console.log(number1 + number2); // This will now print 30 instead of 15.

// The 'const' keyword is used for variables that should not be reassigned.
const pi = 3.14;
console.log("The value of pi is: " + pi);

// Uncommenting the following line will cause an error because 'pi' is a constant.
// pi = 3.14159; // This will throw a TypeError because we cannot reassign a constant variable.
// A good practice is to use 'const' whenever possible to prevent accidental reassignment of variables that should remain constant. 
// If you later need to reassign that variable, you can change it to 'let'.

// There are three primitive data types in JavaScript: numbers, strings, and booleans.
let age = 25; // number; can be an integer or a floating-point number
let name = "John"; // string; text enclosed in euither single or double quotes
let isStudent = true; // boolean; either true or false

// We can use conditional statements to make decisions in our code.
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// else if statements can be used to check multiple conditions.
if (age < 13) {
    console.log("You are a child.");
} else if (age < 18) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}

// Functions are reusable blocks of code that perform a specific task. They can take parameters and return values.

// A function that takes a name and prints a greeting using string concatenation
// Note: since this function does not return a value, it implicitly returns 'undefined'.
function greet(name) {
    console.log("Hello, " + name + "!");
}

// A function that takes two numbers and returns their sum
function add(num1, num2) { 
    return num1 + num2;
}

// When a function returns a value, we can store that value in a variable or use it directly.
let sum = add(5, 10);
console.log("The sum of 5 and 10 is: " + sum);

// We can also call the function directly within a console.log() statement.
console.log("The sum of 7 and 3 is: " + add(7, 3));
