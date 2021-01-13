const readline = require("readline");

class HumanPlayer {
  constructor() {
    // TODO: Create a new readline interface and store is as an instance
    // variable (this.rl). Remember to require the built-in node module,
    // 'readline'onstructor() {
    this.rl = readline.createInterface(process.stdin, process.stdout);
  }

  getMove(processMove) {
    // TODO: Ask the user for their move and process the answer using the rl
    // interface. Invoke the callback function (processMove), passing in
    // the given answer in the form of an array representing [row, col]
    this.rl.question("Input move in the format [row],[column]. (e.g. 3,1)\n", answer => {
      let [row, col] = answer.split(",");
      processMove([Number(row), Number(col)]);
    });
  }

  processGameOver(isWon, turns) {
    // TODO: Display a different message depending on if the player won or lost
    // the game. Close the rl interface.
    if (isWon) console.log(`Congratulations, you won in ${turns} turns!`); 
    else console.log("You lost the game.");
    this.rl.close();
  }
}

module.exports = HumanPlayer;
