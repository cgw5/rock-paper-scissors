console.log("Hello World!!!");

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}   

const computerSelection = getComputerChoice().toLowerCase();
console.log(computerSelection)
const playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win!"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win!"
    }
    else {
        return "You lose, bitch."
    }
}

console.log(playRound(playerSelection, computerSelection));