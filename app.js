const board = document.querySelector('#board');
const colors = ['#DC143C', '#C71585', '#FF4500', '#FFD700', '#4B0082', '#2F4F4F', '#4682B4', '#7FFFD4', '#6B8E23', '#00FA9A', '#FFE4C4'];
const SQUARES_NUMBER = 504;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover', () => 
    setColor(square));

    square.addEventListener('mouseleave', () => 
    removeColor(square));


    board.append(square);
}

function setColor (element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 20px ${color}, 0 0 10px ${color}`;
}

function removeColor (element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px black`;
}

function getRandomColor () {
    const index = Math.floor(Math.random () * colors.length);
    return colors[index];
}