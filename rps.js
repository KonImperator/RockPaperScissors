const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const computerOptions = { 0: "rock", 1: "paper", 2: "scissors" };
const validUserChoices = ["rock", "r", "paper", "p", "scissors", "s"];
let victories = 0;
let losses = 0;
let draws = 0;

let reset = function () {
  victories = 0;
  losses = 0;
  draws = 0;
};

const compareChoices = function (userChoice, computerChoice) {
  switch (computerChoice) {
    case "rock":
      if (userChoice === "rock" || userChoice === "r") {
        console.log("It was a draw!");
        draws++;
      }
      if (userChoice === "paper" || userChoice === "p") {
        console.log("You chose paper! You won :O");
        victories++;
      }
      if (userChoice === "scissors" || userChoice === "s") {
        console.log("You chose scissors! You lost ;(");
        losses++;
      }
      break;
    case "paper":
      if (userChoice === "rock" || userChoice === "r") {
        console.log("You chose rock! You lost ;(");
        losses++;
      }
      if (userChoice === "paper" || userChoice === "p") {
        console.log("It was a draw!");
        draws++;
      }
      if (userChoice === "scissors" || userChoice === "s") {
        console.log("You chose scissors! You won :O");
        victories++;
      }
      break;
    case "scissors":
      if (userChoice === "rock" || userChoice === "r") {
        console.log("You chose rock! You won :O");
        victories++;
      }
      if (userChoice === "paper" || userChoice === "p") {
        console.log("You chose paper! You lost ;(");
        losses++;
      }
      if (userChoice === "scissors" || userChoice === "s") {
        console.log("It was a draw!");
        draws++;
      }
      break;
  }
};

const rpsGame = function () {
  rl.question(
    "Please choose rock/r, paper/p or scissors/s: ",
    function (userChoice) {
      userChoice = userChoice.toLowerCase();
      let computerChoice = computerOptions[Math.floor(Math.random() * 3)].toString();
      if (validUserChoices.includes(userChoice)) {
        console.log(`The computer chose....${computerChoice}`);
        compareChoices(userChoice, computerChoice);
        console.log(
          `Current stats: Victories: ${victories} Losses: ${losses} Draws: ${draws}\nLet's play again!`
        );
      } else if (userChoice === "reset") {
        reset();
        console.log("Stats reset")
      } else {
        console.log("Invalid input!");
      }
      rpsGame();
    }
  );
};
rpsGame();
