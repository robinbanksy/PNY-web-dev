

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

    const nameStart = userStr.indexOf("name: ") + 6;
    const nameEnd = userStr.indexOf(", age: ");

    const ageStart = userStr.indexOf("age: ") + 5;
    const ageEnd = userStr.indexOf(", city: ");
     
    const cityStart = userStr.indexOf("city: ") + 6;


    return {
        name : userStr.substring(nameStart, nameEnd),
        age: userStr.substring(ageStart, ageEnd),
        city: userStr.substring(cityStart)
    }
}

console.log(parseUser("name: John Doe, age: 30, city: New York").city);

// Write a class called "Rectangle" that has the following properties and methods:
// Properties:
// - width: the width of the rectangle
// - height: the height of the rectangle
// Methods:
// - area(): returns the area of the rectangle
// - perimeter(): returns the perimeter of the rectangle
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height); 
    }
}

// Write a class called "Circle" that has the following properties and methods:
// Properties:
// - radius: the radius of the circle
// Methods:
// - area(): returns the area of the circle
// - circumference(): returns the circumference of the circle
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    static fromCircle(circle) {
        return new Circle(circle.radius)
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }
}

const rect1 = new Rectangle(5, 10);
console.log(rect1.area());

const circle1 = new Circle(3);
const circle2 = fromCircle(circle1);