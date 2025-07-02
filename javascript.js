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
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }

    else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ) {
        computerScore++;
        console.log(`YOU LOSE! Too bad, ${computerChoice} beats ${humanChoice}`);
    }

    else {
        humanScore++;
        console.log(`YOU WIN! Nice one, ${humanChoice} beats ${computerChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);