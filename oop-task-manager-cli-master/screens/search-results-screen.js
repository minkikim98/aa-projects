// IMPORTANT! IMPORTANT!
// ---------------------------------------------------------------------
// ALL SCREEN CLASSES HAVE A this.state INSTANCE VARIABLE THAT HOLDS THE
// APPLICATION STATE CREATED IN THE program.js. WHENEVER YOUR CODE NEEDS
// TO INTERACT WITH THE STATE IN ONE OF THE FOLLOWING CLASSES, DO IT
// THROUGH THE this.state INSTANCE VARIABLE.
const { Screen } = require('./screen');

class SearchResultsScreen extends Screen {
  constructor(rl, state, previousScreen) {
    super(rl, state, previousScreen)
    this.currentResults = null;
  }

  setCurrentResults(results) {
    this.currentResults = results;
  }

  show() {
    this.printHeader('SEARCH RESULTS');
    
    if (!this.currentResults.length) {
      console.log("No results found");

      console.log();
      this.rl.question("Enter to return to the main screen. ", () => {
        this.previousScreen.show();
      });
      return;
    }

    console.log();
    console.log("Your search matches");
    console.log();

    this.currentResults.forEach((task, index) => {
      console.log(`${index + 1}. ${task.getShortText()}`);
    });

    console.log();
    this.rl.question("Enter to return to the main screen. ", () => {
      this.previousScreen.show();
    });
  }
}

module.exports = {
  SearchResultsScreen
}
