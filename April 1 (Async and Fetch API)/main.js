
// Asynchronous code is code that runs in the background and does not block the main thread of execution.
// This is in contrast to the usual synchronous code, which runs sequentially and can block the main thread if it takes a long time to execute.

console.log("This is the first log");

setTimeout(() => {
    console.log("This is the second log");
}, 1000);

console.log("This is the third log");




// Fetch API
// The Fetch API is how we make HTTP requests in JavaScript. It is a modern replacement for the older XMLHttpRequest API
// The Fetch function returns a Promise, so to use it, our code will need to be asynchronous.
// const url = "https://emojihub.yurace.pro/api/random";


// // Using Promises
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(`Fetched data (Promises): ${JSON.stringify(data)}`);
//     })
//     .catch(error => console.error("Error fetching data:", error));


// // Async/Await
// async function fetchData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(`Fetched data (Async/Await): ${JSON.stringify(data)}`);
// }
// fetchData();

// Another example
async function fetchMetObject() {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/1000');
    const data = await response.json();
    console.log(`Fetched data (Met Object): ${JSON.stringify(data)}`);
}
fetchMetObject();