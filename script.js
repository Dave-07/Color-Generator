function randomColor() {
    const random = Math.floor(Math.random() * 256);

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    return hexColor;
};


function setColor() {

    const container = document.querySelector('.container');

    for (let i = 0; i < 45; i++) {
        const div = document.createElement('div');
        div.classList.add('color-container');
        container.appendChild(div);
    }

    const colorContainer = document.querySelectorAll('.color-container');

    colorContainer.forEach(container => {

        const copyBtn = document.createElement('button');
        const color = randomColor();

        container.style.background = color;
        container.textContent = color;

        copyBtn.textContent = '📄';

        copyBtn.classList.add('copyBtn');
        container.appendChild(copyBtn);

        container.addEventListener('click', () => {
            navigator.clipboard.writeText(color)
                .then(() => {
                    copyBtn.classList.add('rotating');
                    container.firstChild.textContent = 'Copied!';

                    setTimeout(() => {
                        copyBtn.classList.remove('rotating');
                        container.firstChild.textContent = color;
                    }, 500);
                })

                .catch(err => {
                    console.error('Failed to copy:', err);
                });
        });

    });
}

setColor();
