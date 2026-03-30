

function rot13(str) {
    const alpha = "abcdefghijklmnopqrstuvwxyz"

    let output = ""
    let index = 0;
    for (const char of str) {
        if(!alpha.includes(char.toLowerCase())) {
            output += char;
        } else {
            index = alpha.indexOf(char.toLowerCase())
            output += alpha.charAt((index + 13) % 26)
        }
    }

    return output;
}


// Write a function that encrypts a string using an n-shift cipher
// Like Rot13, an n-shift cipher replaces each letter with the letter n letters after it in the alphabet.
// For example, with a shift of 3, 'A' becomes 'D', 'B' becomes 'E', and so on.
//The function will take a string and a number n as arguments and return the encrypted string.
function nShiftCipher(str, n) {
    return str;
}


// Write a function that takes in a string of the following format:
// "name: John Doe, age: 30, city: New York"
// And returns an object with the following structure:
// {
//   name: "John Doe",
//   age: 30,
//   city: "New York"
// }
function parseUser(userStr) {

}

// Write a class called "Rectangle" that has the following properties and methods:
// Properties:
// - width: the width of the rectangle
// - height: the height of the rectangle
// Methods:
// - area(): returns the area of the rectangle
// - perimeter(): returns the perimeter of the rectangle
class Rectangle {

}

// Write a class called "Circle" that has the following properties and methods:
// Properties:
// - radius: the radius of the circle
// Methods:
// - area(): returns the area of the circle
// - circumference(): returns the circumference of the circle
class Circle {

}