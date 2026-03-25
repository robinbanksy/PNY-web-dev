const addButton = document.getElementById('add-item')
const template = document.getElementById('card-template');

let cardCount = 0;

addButton.addEventListener('click', () => {
    cardCount++;

    // Clone the content of the template to create a new object
    // The clone is a "document fragment", which is like a smaller DOM, independent of the main one
    const clone = template.content.cloneNode(true);

    // Modifying the clone to include the desired content.
    clone.querySelector('.card-title').textContent = `Item ${cardCount}`;
    clone.querySelector('.card-description').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    // Append our new cloned card to the container.
    // Once we do this, the content of the template will be rendered and visible on the page.
    document.querySelector('.card-container').appendChild(clone);
});