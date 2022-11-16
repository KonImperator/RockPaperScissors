const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const computerOptions = { 0: "rock", 1: "paper", 2: "scissors" };
// options the computer will be able to choose from; keys are 0,1,2 in order to be able to use the Math.random function for randomness
const validUserChoices = ["rock", "r", "paper", "p", "scissors", "s"];
// adding all valid choices in order to easily invalidate any other user input
let victories = 0;
let losses = 0;
let draws = 0;
// initiating variables to be used


let reset = function () {
  victories = 0;
  losses = 0;
  draws = 0;
};
// reset function will be used to reset the user stats to 0


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
// compareChoices function will compare the choices of both the user and the computer and print the outcome of the comparison


const rpsGame = function () {
  rl.question("Please choose rock/r, paper/p or scissors/s: ", function (userChoice) {
      userChoice = userChoice.toLowerCase();
      // making sure the user's choice is standardized for easy validation
      let computerChoice = computerOptions[Math.floor(Math.random() * 3)].toString();
      // computer generating it's choice from the intially created object that holds the 3 choices
      if (validUserChoices.includes(userChoice)) {
        // validating the user's choice
        console.log(`The computer chose....${computerChoice}`);
        compareChoices(userChoice, computerChoice);
        // comparing 2 choices to see who won
        console.log(
          `Current stats: Victories: ${victories} Losses: ${losses} Draws: ${draws}\nLet's play again!\n`
        );
      } else if (userChoice === "reset") {
        reset();
        // resetting stats if user typed in "reset"
        console.log("Stats reset\n")
      } else {
        console.log("Invalid input!\n");
        // if input was found to be invalid, print this
      }
      rpsGame();
      // recursively calling the function
    }
  );
};
rpsGame();
// this will be the main function