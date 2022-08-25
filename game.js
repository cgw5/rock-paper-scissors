let playerScore = 0
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

let playerScoreCounter = document.getElementById('playerScore')
let compScoreCounter = document.getElementById('computerScore')


const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

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

// Computer picks either rock, paper, or scissors
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)].toLowerCase()
}  

// Player inputs rock, paper, or scissors
function getPlayerChoice() {
    return prompt("Choose rock, paper, or scissors").toLowerCase();
}

// playRound gives result of a round of the game 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("TIE")
        return "It's a tie."
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        console.log("WIN")
        return "You win!"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        console.log("WIN")
        return "You win!"
    }
    else {
        computerScore++
        console.log("LOSER")
        return "You lose."
    }
}

// game function
function game(playerSelection) {
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    console.log(`Player Score: ${playerScore} `)
    console.log(`Computer Score: ${computerScore}`)
    playerScoreCounter.textContent = `Player Score: ${playerScore} `;
    compScoreCounter.textContent = `Computer Score: ${computerScore} `;
    console.log("")
    if (playerScore > computerScore) {
        return "You beat the computer!"
    }
    else if (playerScore < computerScore) {
        return "You lost against the computer."
    }
    else {
        return "It's a draw."
    }
}