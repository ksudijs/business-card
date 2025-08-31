const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const choices = ['rock', 'paper', 'scissors'];
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const tieScoreDisplay = document.getElementById('tieScoreDisplay');
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;


function playGame(choice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]; 
    let result = "";
    

    if(computerChoice === choice){
        result = "IT'S A TIE!";
        tieScore++;
    } else if(
        choice === 'rock' && computerChoice === 'scissors' ||
        choice === 'paper' && computerChoice === 'rock' ||
        choice === 'scissors' && computerChoice === 'paper'
    ){
        result = 'YOU WIN!';
        playerScore++;
    } else{
        result = 'YOU LOST!';
        computerScore++;
    }

    resultDisplay.classList.remove('win', 'lose');

    if(result === 'YOU WIN!'){
        resultDisplay.classList.add('win');
    } else if(result === 'YOU LOST!'){
        resultDisplay.classList.add('lose');
    }


    playerDisplay.textContent = `PLAYER: ${choice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = `${result}`
    playerScoreDisplay.textContent = ` ${playerScore}`;
    computerScoreDisplay.textContent = ` ${computerScore}`;
    tieScoreDisplay.textContent = ` ${tieScore}`
}