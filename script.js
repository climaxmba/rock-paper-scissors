// Declare variables
let computerSelection = caseTransform(getComputerChoice().toUpperCase());
let playerSelection = caseTransform(prompt('Rock, Paper or Scissors?').toUpperCase().trim()); 

// Log playRound() in console
console.log(playRound(playerSelection, computerSelection));
5
// Declare functions
function playRound(playerSelection, computerSelection) {
  if (!playerSelection || (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissors')) {
    return 'Error';
  } else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') || (computerSelection == 'Paper' && playerSelection == 'Rock') || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
    return whoWon('computer');
  } else if (playerSelection == computerSelection) {
    return whoWon();
  } else {
    return whoWon('player');
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice ==2) {
    return "Rock";
  } else if (choice == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}


// These are auxilliary functuions, they where not part of the instructions
// whoWon() evaluates the winner and returns a string for playRound()
// caseTransform() will capitalize the first letter
function whoWon(who) {
  if (who == 'computer') {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (who == 'player') {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return "It's a tie!";
  }
}


// This is not the best practice, but i'll get back to it later
function caseTransform(string) {
  if (string == "ROCK") {
    return "Rock";
  } else if (string == "PAPER") {
    return "Paper";
  } else if (string == "SCISSORS") {
    return "Scissors";
  } else {
    return;
  }
}