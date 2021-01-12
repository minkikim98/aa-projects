// IMPORTANT! IMPORTANT!
// ---------------------------------------------------------------------
// ALL SCREEN CLASSES HAVE A this.state INSTANCE VARIABLE THAT HOLDS THE
// APPLICATION STATE CREATED IN THE program.js. WHENEVER YOUR CODE NEEDS
// TO INTERACT WITH THE STATE IN ONE OF THE FOLLOWING CLASSES, DO IT
// THROUGH THE this.state INSTANCE VARIABLE.
const { Screen } = require('./screen');
const { SearchResultsScreen } = require('./search-results-screen'); 

class SearchScreen extends Screen {
  constructor(rl, state, previousScreen) {
    super(rl, state, previousScreen)
    this.searchResultsScreen = new SearchResultsScreen(rl, state, previousScreen);
  }

  show() {
    this.printHeader('SEARCH ITEMS');
    console.log();
    console.log("Please type your search term and hit Enter.");
    console.log();
    this.rl.question("> ", term => {
      const tasks = this.state.searchByTerm(term);
      this.searchResultsScreen.setCurrentResults(tasks);
      this.searchResultsScreen.show();
    });
  }
}

module.exports = {
  SearchScreen
};
