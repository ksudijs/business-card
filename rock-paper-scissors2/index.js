const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const choices = ['rock', 'paper', 'scissors'];
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
const tieScoreDisplay = document.getElementById('tieScoreDisplay');
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;
    resultDisplay.classList.remove('win', 'lose')
    if(computerChoice === playerChoice){
        result = "IT'S A TIE";
        tieScore++;
    }
    else if(
        playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper'
    ){
        result = 'YOU WIN';
        playerScore++;
        resultDisplay.classList.add('win');
    } else{
        result = 'YOU LOST';
        computerScore++;
        resultDisplay.classList.add('lose');
    }

    
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = `${result}`;
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
    tieScoreDisplay.textContent = `${tieScore}`;
}
