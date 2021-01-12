// IMPORTANT! IMPORTANT!
// ---------------------------------------------------------------------
// ALL SCREEN CLASSES HAVE A this.state INSTANCE VARIABLE THAT HOLDS THE
// APPLICATION STATE CREATED IN THE program.js. WHENEVER YOUR CODE NEEDS
// TO INTERACT WITH THE STATE IN ONE OF THE FOLLOWING CLASSES, DO IT
// THROUGH THE this.state INSTANCE VARIABLE.

const { Screen } = require('./screen');
const { ManageTasksScreen } = require('./manage-task-screen');
const { ManageCategoriesScreen } = require('./manage-categories-screen');
const { SearchScreen } = require('./search-screen');

class MainScreen extends Screen {
  constructor(rl, state) {
    super(rl, state)
    this.manageTasksScreen = new ManageTasksScreen(rl, state, this);
    this.manageCategoriesScreen = new ManageCategoriesScreen(rl, state, this);
    this.searchScreen = new SearchScreen(rl, state, this);
  }
 
  show() {
    this.printHeader('TO-DO FOR YOU!!!!');
    this.printMenu([
        'Review my to-do items',
        'Search for a to-do item',
        'Manage categories'
    ]);
    
    this.rl.question("> ", answer => {
      if (answer === "1") {
        this.manageTasksScreen.show();
      } else if (answer === "2") {
        this.searchScreen.show();
      } else if (answer === "3") {
        this.manageCategoriesScreen.show();
      } else if (answer.toLowerCase() === "x") {
        console.clear();
        this.rl.close();
        process.exit();
        return;
      } else {
        this.show();
      }
    });
  }
}

module.exports = {
  MainScreen
};

