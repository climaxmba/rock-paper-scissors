





function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice ==2) {
    return "ROCK";
  } else if (choice == 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

getComputerChoice()