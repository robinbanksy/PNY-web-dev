
const para = document.querySelector(".example-text");
const input = document.querySelector("#input");

function hello() {
    para.innerText = input.value;
}