 function randomColor(){

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

        setColor();

        function setColor(){

            for (let i = 0; i < 45; i++){
                const container = document.querySelector('.container');
                const div = document.createElement('div');
                div.classList.add('color-container');
                container.appendChild(div);
            }

            let container = document.querySelectorAll('.color-container');
            container.forEach( element => {
                const color = randomColor(); 
                element.style.background = color;
                element.textContent = color;
            });
        }