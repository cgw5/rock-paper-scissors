console.log("Hello World!!!");

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}   

console.log(getComputerChoice());

const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();

console.log(computerSelection)
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
}
