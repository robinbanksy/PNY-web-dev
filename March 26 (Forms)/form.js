
const form = document.querySelector("form");
const template = document.getElementById("user-data-template");
const userDataContainer = document.querySelector(".user-data-container");

let userCount = 0;

form.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    userCount++;

    // Get the form data
    const formData = new FormData(form);

    // Convert the form data to JSON
    const data = Object.fromEntries(formData);

    // Do something with the JSON data (e.g., send it to a server)
    console.log(data.email);

    const clone = template.content.cloneNode(true);

    clone.querySelector("h3").textContent = `User #${userCount}`;
    clone.querySelector(".user-name").textContent = `${capitalize(data.fname)} ${capitalize(data.lname)}`;
    clone.querySelector(".user-email").textContent = data.email;

    userDataContainer.appendChild(clone);
});


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}

