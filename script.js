// Declare variables
let playerScore = 0;
let computerScore = 0;

// Root call
game()

// Declare functions
function game() {
  for (let i = 0; i < 5; i++) {
    computerSelection = caseTransform(getComputerChoice().toUpperCase());
    playerSelection = caseTransform(prompt(`Rock, Paper or Scissors? ${5-i} round(s) left`).toUpperCase().trim());
    console.log(playRound(playerSelection, computerSelection));
  }
  if (computerScore > playerScore) {
    console.log('You lost the game!');
  } else if (computerScore < playerScore) {
    console.log('You Won the game!');
  } else {
    console.log('It\'s a tie!')
  }
  console.log(`Your score: ${playerScore}\nComputer score: ${computerScore}`)
  return;
}

function playRound(playerSelection, computerSelection) {
  if (!playerSelection || (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissors')) {
    return 'Error';
  } else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') || (computerSelection == 'Paper' && playerSelection == 'Rock') || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
    computerScore++
    return whoWon('computer');
  } else if (playerSelection == computerSelection) {
    return whoWon();
  } else {
    playerScore++
    return whoWon('player');
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 2) {
    return "Rock";
  } else if (choice == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}


// These are auxilliary functuions
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