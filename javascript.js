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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore ++;
            console.log("YOU LOSE! Too bad, Paper beats Rock");
        }
        if (computerChoice === "scissors") {
            humanScore ++;
            console.log("YOU WIN! Nice one, Rock beats Scissors");
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore ++;
            console.log("YOU LOSE! Too bad, Rock beats Scissors");
        }
        if (computerChoice === "paper") {
            humanScore ++;
            console.log("YOU WIN! Nice one, Scissors beat Paper");
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore ++;
            console.log("YOU LOSE! Too bad, Scissors beat Paper");
        }
        if (computerChoice === "rock") {
            humanScore ++;
            console.log("YOU WIN! Nice one, Paper beats Scissors");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);