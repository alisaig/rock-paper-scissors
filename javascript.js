console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "rock";
    }
    else if (number === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose the sign you want to play", "rock / paper /scissors");
    return choice;
}
