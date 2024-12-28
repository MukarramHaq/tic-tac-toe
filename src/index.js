// Home screen elements
const xBtnElement = document.querySelector('.x-btn');
const oBtnElement = document.querySelector('.o-btn');
const xSvgElement = document.querySelector('.x-svg');
const oSvgElement = document.querySelector('.o-svg');

// New Game buttons
const cpuBtnElement = document.querySelector('.cpu-btn');

// Welcome and game screens
const welcomeScreenElement = document.querySelector('.welcome-screen');
const gameScreenElement = document.querySelector('.game-screen');

// Elements of the bottom left and bottom right <p> tags
const bottomLeftElement = document.querySelector('.bottom-left');
const bottomRightElement = document.querySelector('.bottom-right');

// Game board elements
const gameBoardElement = document.querySelectorAll('.game-board');

//Booleans to check for which button is selected. True means you chose that symbol
let xSelected = false;
let oSelected = true;

// Adding event listeners
xBtnElement.addEventListener('click', () => {

    //Changing the boolean values
    xSelected = true;
    oSelected = false;

    // Changing the properties of the O btn
    oBtnElement.style.backgroundColor = '#1A2A33';
    oSvgElement.querySelector('path').setAttribute('fill', '#A8BFC9');

    // Changing the properties of the X btn
    xBtnElement.style.backgroundColor = '#a8bfc9';
    xSvgElement.querySelector('path').setAttribute('fill', '#1A2A33');
});

oBtnElement.addEventListener('click', () => {

    //Changing the boolean values
    xSelected = false;
    oSelected = true;

    // Changing the properties of the O btn
    oBtnElement.style.backgroundColor = '#a8bfc9';
    oSvgElement.querySelector('path').setAttribute('fill', '#1A2A33');

    // Changing the properties of the X btn
    xBtnElement.style.backgroundColor = '#1A2A33';
    xSvgElement.querySelector('path').setAttribute('fill', '#A8BFC9');
});

// Playing against the CPU
cpuBtnElement.addEventListener('click', () => {
    welcomeScreenElement.style.display = 'none';
    gameScreenElement.style.display = 'flex';

    if(xSelected) {
        bottomLeftElement.textContent = 'You (X)';
        bottomRightElement.textContent = 'CPU (O)';
    }
    
});