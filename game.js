let playerScore = 0
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

let playerScoreCounter = document.getElementById('playerScore')
let compScoreCounter = document.getElementById('computerScore')
let choice = document.getElementById('choice')
let result = document.getElementById('result')

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const playAgainButton = document.querySelector('#playAgain');

// clicking on rock calls game function with "rock" as the player choice
rockButton.addEventListener("click", e =>  {
    game("rock");
});

// clicking on paper calls game function with "rock" as the player choice
paperButton.addEventListener("click", e =>  {
    game("paper");
});

// clicking on scissors calls game function with "rock" as the player choice
scissorsButton.addEventListener("click", e =>  {
    game("scissors");
});

// clicking "Play Again!" will simply reload the page
playAgainButton.addEventListener("click", e =>  {
    location.reload();
})

// Computer picks either rock, paper, or scissors
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)].toLowerCase()
}  

// Player inputs rock, paper, or scissors
function getPlayerChoice() {
    return prompt("Choose rock, paper, or scissors").toLowerCase();
}

// playRound gives result of a round of the game and prints result of round
function playRound(playerSelection, computerSelection) {
    choice.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    if (playerSelection === computerSelection) {
        result.textContent = "It's a draw.";
        return "It's a tie."
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        result.textContent = "You beat the computer!";
        return "You win!"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        result.textContent = "You beat the computer!";
        return "You win!"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        result.textContent = "You beat the computer!";
        return "You win!"
    }
    else {
        computerScore++
        result.textContent = "You lost against the computer.";
        return "You lose."
    }
}

// game function
function game(playerSelection) {
    if (playerScore == 5 || computerScore == 5) {
    }
    else {
        let computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
        playerScoreCounter.textContent = `Player Score: ${playerScore} `;
        compScoreCounter.textContent = `Computer Score: ${computerScore} `;
    }
    if (playerScore == 5) {
        document.getElementById('rockButton').disabled = true;
        document.getElementById('paperButton').disabled = true;
        document.getElementById('scissorsButton').disabled = true;
        result.textContent = 'You won the game! Congrats!'
    }
    else if (computerScore == 5) {
        document.getElementById('rockButton').disabled = true;
        document.getElementById('paperButton').disabled = true;
        document.getElementById('scissorsButton').disabled = true;
        result.textContent = 'You lost the game. Better luck next time.'
    }
}