// Declare variables
let playerScore = 0;
let computerScore = 0;

// Root call
game();

// Declare functions
function game() {
  computerSelection = transormCase(getComputerChoice().toUpperCase());
  playerSelection = transormCase(prompt('Rock, Paper or Scissors?').toUpperCase().trim());
  console.log(playRound(playerSelection, computerSelection));
  
  if (computerScore > playerScore) {
    console.log('You lost the game!');
  } else if (computerScore < playerScore) {
    console.log('You Won the game!');
  } else {
    console.log('It\'s a tie!');
  }
  console.log(`Your score: ${playerScore}\nComputer score: ${computerScore}`);
  alert('View results in console');
  return;
}

function playRound(playerSelection, computerSelection) {
  if (!playerSelection || (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissors')) {
    return 'Error';
  } else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') || (computerSelection == 'Paper' && playerSelection == 'Rock') || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
    computerScore++;
    return getWinner('computer');
  } else if (playerSelection == computerSelection) {
    return getWinner();
  } else {
    playerScore++;
    return getWinner('player');
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

function getWinner(who) {
  if (who == 'computer') {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (who == 'player') {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return "It's a tie!";
  }
}

function transormCase(string) {
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