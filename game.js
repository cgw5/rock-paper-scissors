let playerScore = 0
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

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

// for 5 rounds, plays the game
function game() {
    while (playerScore < 5 && computerScore < 5) {
        let computerSelection = getComputerChoice()
        let playerSelection = getPlayerChoice()
        playRound(playerSelection, computerSelection)
        console.log(`Player Score: ${playerScore} `)
        console.log(`Computer Score: ${computerScore}`)
        console.log("")
    }
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

// plays game in console
 console.log(game());