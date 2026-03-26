

// Write a function that takes a list of numbers and returns the average of the numbers in the list.
function calculateAverage(numbers) {
    let sum = 0;
    for(const num of numbers) {
        sum = sum + num;
    }

    return sum / numbers.length;
}

// TESTING
console.log("Testing calculateAverage function:\n");
console.log(`Average of [1, 2, 3, 4, 5]:\n Correct Answer: 3\n Function Output: ${calculateAverage([1, 2, 3, 4, 5])}\n`);
console.log(`Average of [22, 56, 34, 89]:\n Correct Answer: 50.25\n Function Output: ${calculateAverage([22, 56, 34, 89])}`);
console.log("\n\n");

// Write a function that takes a list of numbers and returns the largest number in the list.
function findLargest(numbers) {
    
}

// TESTING
console.log("Testing findLargest function:\n");
console.log(`Largest of [1, 2, 3, 4, 5]:\n Correct Answer: 5\n Function Output: ${findLargest([1, 2, 3, 4, 5])}\n`);
console.log(`Largest of [1000, 99, 9999, 45, 0]:\n Correct Answer: 9999\n Function Output: ${findLargest([1000, 99, 9999, 45, 0])}`);
console.log("\n\n");

// Write a function that takes a list of strings and returns the longest string in the list.
function findLongest(strings) {
    return '';
}

// TESTING
console.log("Testing findLongest function:\n");
console.log(`Longest of ["apple", "banana", "cherry", "date"]:`);
console.log(` Correct Answer: "banana"`);
console.log(` Function Output: ${findLongest(["apple", "banana", "cherry", "date"])}`);
console.log("\n\n");

// Write a function that takes a string and returns the number of vowels in the string.
function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// TESTING
console.log("Testing countVowels function:\n");
console.log(`Number of vowels in "hello world":\n Correct Answer: 3\n Function Output: ${countVowels("hello world")}\n`);
console.log(`Number of vowels in "the quick brown fox":\n Correct Answer: 5\n Function Output: ${countVowels("the quick brown fox")}`);

function isPrime(num) {

}


function sum(numbers) {

}

function squared(x) {

}

function cubed(x) {

}