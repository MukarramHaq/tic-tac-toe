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

// Outline SVGs
const xEls = document.querySelectorAll('.x-element');
const oEls = document.querySelectorAll('.o-element');

console.log(xEls, oEls);

// Game board elements
const gameBoardElement = document.querySelectorAll('.game-board');

//Booleans to check for which button is selected. True means you chose that symbol
let xSelected = false;
let oSelected = true;

// Flag for switching off the player's turn and to check if the game ended
let gameEnded = false;
let isPlayerTurn = false;

// Representing the game board logically
board = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

// Mapping the game board elements to the logical board
gameBoardElement.forEach((element, index) => {
    const row = Math.floor(index / 3);
    const column = index % 3;

    element.dataset.row = row;
    element.dataset.column = column;

});

// Adding event listeners
xBtnElement.addEventListener('click', () => {

    //Changing the boolean values
    xSelected = true;
    oSelected = false;
    isPlayerTurn = true;

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
    isPlayerTurn = false;

    if(oSelected){
        bottomLeftElement.textContent = 'CPU (X)';
        bottomRightElement.textContent = 'You (O)';
    }

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

        gameBoardElement.forEach(element => {
            element.addEventListener('click', () => {
                // To disable player interaction when its the CPU's turn
                if(!isPlayerTurn) return;
                if(gameEnded) return;
    
                const row = element.dataset.row;
                const column = element.dataset.column;
                
                playerMove(element, row, column);
            })
        })
    }else{
        cpuMove(board);
        xEls.forEach(x => {
            x.style.display = 'none';
        })
        oEls.forEach(o => {
            o.style.display = 'block';
        })
        if(isPlayerTurn){
            gameBoardElement.forEach(element => {
                element.addEventListener('click', () => {
                    const row = element.dataset.row;
                    const column = element.dataset.column;
                    playerMove(element, row, column);
                    console.log(board);
                })
            })
        }
        console.log(board);
    }
    
});

//To check for a winner

const checkWinner = (board) => {


    for(let i = 0; i < board.length; i++){

        // Check rows
        if(checkWinningLine('X', [[i, 0], [i, 1], [i, 2]])) return;
        if(checkWinningLine('O', [[i, 0], [i, 1], [i, 2]])) return;

        // Check columns
        if (checkWinningLine('X', [[0, i], [1, i], [2, i]])) return;
        if (checkWinningLine('O', [[0, i], [1, i], [2, i]])) return;

    }

    // Check diagonals
    if (checkWinningLine('X', [[0, 0], [1, 1], [2, 2]])) return;
    if (checkWinningLine('O', [[0, 0], [1, 1], [2, 2]])) return;

    if (checkWinningLine('X', [[0, 2], [1, 1], [2, 0]])) return;
    if (checkWinningLine('O', [[0, 2], [1, 1], [2, 0]])) return;

    // // For diagonal
    // if(checkWinningLine('X', [board[0][0], board[1][1], board[2][2]])) return;
    // if(checkWinningLine('O', [board[0][0], board[1][1], board[2][2]])) return;

    // if(checkWinningLine('X', [board[0][2], board[1][1], board[2][0]])) return;
    // if(checkWinningLine('O', [board[0][2], board[1][1], board[2][0]])) return;


    // For row
    // for(let i = 0; i < board.length; i++){
    //     if(board[i][0] === 'X' && board[i][1] === 'X' && board[i][2] === 'X'){
    //         alert('The winner is X');
    //         return gameEnded = true;
    //         // return;
    //     }
    //     if(board[i][0] === 'O' && board[i][1] === 'O' && board[i][2] === 'O'){
    //         alert('The winner is O');
    //         return gameEnded = true;
    //     }
    // }

    // // For column
    // for(let i = 0; i < board.length; i++){
    //     if(board[0][i] === 'X' && board[1][i] === 'X' && board[2][i] === 'X'){
    //         alert('The winner is X');
    //         return gameEnded = true;
    //     }
    //     if(board[0][i] === 'O' && board[1][i] === 'O' && board[2][i] === 'O'){
    //         alert('The winner is O');
    //         return gameEnded = true;
    //     }
    // }

    // // For diagonal
    
    // if((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || (board[0][2] === 'X' && board[1][1] === 'X' && board[2][2] === 'X')){
    //     alert('The winner is X');
    //     return gameEnded = true;
    // }
    // if((board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') || (board[0][2] === 'O' && board[1][1] === 'O' && board[2][2] === 'O')){
    //     alert('The winner is O')
    //     return gameEnded = true;
    // }
    

    // For draw
    let flattenedBoard = board.flat();
    if(!flattenedBoard.includes(null)){
        alert('The game is a draw');
        return gameEnded = true;
    }
}

// Helper function for the player move
const playerMove = (element, row, column) => {
    if(board[row][column] === null){
        if(oSelected){
            board[row][column] = 'O'; // The logical board is updated. This is my signal to switch the turn to the CPU
            element.innerHTML = `<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>`
            console.log('The position that is clicked is:', [row, column]);
        }else{
            board[row][column] = 'X';
            element.innerHTML = `<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>`
        }
        if(checkWinner(board)) return;
        isPlayerTurn = false;
        setTimeout(() => {cpuMove(board);}, 1000);
    }else if(board[row][column] === 'X' || board[row][column] === 'O'){
        alert('This position is already taken');
    }
}

// Helper function for CPU move
const cpuMove = (board) => {

    if(gameEnded == true) return;

    let row, column

    do{
        row = Math.floor(Math.random() * 3); // Generates random index for row;
        column = Math.floor(Math.random() * 3); // Generates random index for column;
    }while(board[row][column] != null){
        if(oSelected){
            board[row][column] = 'X';
        }else{
            board[row][column] = 'O';
        }
        // Finds the corresponding UI element in the game board
        const cpuElement = Array.from(gameBoardElement).find(
            el => el.dataset.row == row && el.dataset.column == column
        );
        if(oSelected){
            cpuElement.innerHTML = `<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>`
        }else{
            cpuElement.innerHTML = `<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>`
        }
        isPlayerTurn = true;
        if(checkWinner(board)) return;
    }
}

const checkWinningLine = (player, cells) => {
    if (cells.every(([row, col]) => board[row][col] === player)) {
        cells.forEach(([row, col]) => highlightWinner(player, row, col));
        alert(`The winner is ${player}`);
        return gameEnded = true;
        // return true;
    }
    return false;
};

const highlightWinner = (player, row, col) => {
    const cell = Array.from(gameBoardElement).find(
        el => el.dataset.row == row && el.dataset.column == col
    );
    if(player === 'X'){
        cell.style.backgroundColor = '#31C3BD';
        cell.innerHTML = `<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#1A2A33" fill-rule="evenodd"/></svg>`;
    }else{
        cell.style.backgroundColor = '#F2B137';
        cell.innerHTML = `<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#1A2A33"/></svg>`
    }
};