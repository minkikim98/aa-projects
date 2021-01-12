// IMPORTANT! IMPORTANT!
// ---------------------------------------------------------------------
// ALL SCREEN CLASSES HAVE A this.state INSTANCE VARIABLE THAT HOLDS THE
// APPLICATION STATE CREATED IN THE program.js. WHENEVER YOUR CODE NEEDS
// TO INTERACT WITH THE STATE IN ONE OF THE FOLLOWING CLASSES, DO IT
// THROUGH THE this.state INSTANCE VARIABLE.
const { Screen } = require('./screen');

class EditCategoryScreen extends Screen {
  constructor(rl, state, previousScreen) {
    super(rl, state, previousScreen);
    this.currentCategoryIndex = null;
  }

  setCurrentCategoryIndex(index) {
    this.currentCategoryIndex = index
  }

  show() {
    const category = this.state.getCategoryByIndex(this.currentCategoryIndex);
    if (category) {
      this.printHeader('EDIT CATEGORY');
      console.log();
      console.log(`You are editing \"${category}\".`);
      console.log();
      console.log("What would you like to rename it? Hit");
      console.log("\"Enter\" when you are done.");
      console.log();
      this.rl.question("> ", answer => {
        this.state.setCategory(this.currentCategoryIndex, answer);
        this.state.save();
        this.previousScreen.show();
      });
    } else {
      this.previousScreen.show();
    }
  }
}

module.exports = {
  EditCategoryScreen
};
