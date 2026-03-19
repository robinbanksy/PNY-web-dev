
// Event listener
const clickEventDemo = document.querySelector(".click-event-demo");
clickEventDemo.addEventListener("click", function() {
    alert("Button Clicked!");
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

