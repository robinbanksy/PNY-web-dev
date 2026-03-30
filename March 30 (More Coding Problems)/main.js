const emojiContainer = document.querySelector('.emoji-container');

fetch('https://emojihub.yurace.pro/api/random')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const emojiElement = document.createElement('div');
        emojiContainer.appendChild(emojiElement);
        emojiElement.innerHTML = `${data.htmlCode[0]} ${data.name}`;
    })
    .catch(error => console.error('Error fetching emoji:', error));

