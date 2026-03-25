
// Event listener
const clickEventDemo = document.querySelector(".click-event-demo");
const heading = document.querySelector("h1");
clickEventDemo.addEventListener("click", function() {
    alert("Button clicked");
});

// Bubbling
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
parent.addEventListener('click', function() {
     alert('Parent clicked');
});
child.addEventListener('click', function() {
     alert('Child clicked');
});


// Recreate yesterday's example, 
// where a paragraph tag matches its text to the input in a text field
// Bonus Challenge: Make the paragraph replace all letter E's in the input with 3's
const textInput = document.getElementById("textInput");
const paragraph = document.querySelector(".challenge-paragraph");
textInput.addEventListener("input" , function() {
     paragraph.innerText = Eis3(textInput.value);
});


function Eis3(str) {
    let output = ""
    for (const char of str) {
        if (char === "e" || char === "E") {
            output += "3";
        } else {      
            output += char;
        }
    }
    return output;
}