function getComputerChoice() {
  let probability = Math.floor(Math.random() * 3);

  if (probability === 0) {
    return "rock";
  } else if (probability === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("rock, paper or scissors?");

  return choice.toLowerCase();
}

function playGame() {
  let n = 5;

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a Tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      return "rock beat scissors, You Win!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      return "paper beat rock, You Win!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      return "scissors beat paper, You Win!";
    } else {
      computerScore++;
      return `${computerChoice} beat ${humanChoice}, You Lose`;
    }
  }
  while (n--) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }

  console.log("Score:");
  console.log("You:" + humanScore);
  console.log("Computer:" + computerScore);

  if (humanScore > computerScore) {
    console.log("You Win!");
  } else if (humanScore < computerScore) {
    console.log("You Lose!");
  } else {
    console.log("It's a Tie!");
  }
}

playGame();
