// Declare variables & constants
let playerScore = 0;
let computerScore = 0;
let roundStatus = document.getElementById('round-status');
let result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => playRound(buttons[i].textContent, getComputerChoice()));
}

// Declare functions
function playRound(playerSelection, computerSelection) {
  if ((computerScore == 5) || (playerScore == 5)) {
    game(playerScore, computerScore);
  } else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') || (computerSelection == 'Paper' && playerSelection == 'Rock') || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
    computerScore++;
    setRoundWinner('computer', playerSelection, computerSelection);
  } else if (playerSelection == computerSelection) {
    setRoundWinner();
  } else {
    playerScore++;
    setRoundWinner('player', playerSelection, computerSelection);
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

function setRoundWinner(who, playerSelection, computerSelection) {
  if (who == 'computer') {
    roundStatus.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (who == 'player') {
    roundStatus.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    roundStatus.textContent = "It's a tie!";
  }
  result.textContent = ` Your score: ${playerScore} Computer score: ${computerScore}`;
}

function game(playerScore, computerScore) {
  if (computerScore > playerScore) {
    result.textContent = 'You lost the game!';
  } else if (computerScore < playerScore) {
    result.textContent = 'You Won the game!';
  } else {
    result.textContent = 'It\'s a tie!';
  }

  result.textContent = result.textContent + ` Your score: ${playerScore} Computer score: ${computerScore}`;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  };
  document.getElementById('info').style.visibility = 'hidden';
}