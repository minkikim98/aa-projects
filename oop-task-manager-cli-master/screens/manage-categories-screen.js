// IMPORTANT! IMPORTANT!
// ---------------------------------------------------------------------
// ALL SCREEN CLASSES HAVE A this.state INSTANCE VARIABLE THAT HOLDS THE
// APPLICATION STATE CREATED IN THE program.js. WHENEVER YOUR CODE NEEDS
// TO INTERACT WITH THE STATE IN ONE OF THE FOLLOWING CLASSES, DO IT
// THROUGH THE this.state INSTANCE VARIABLE.
const { Screen } = require('./screen');
const { EditCategoryScreen } = require('./edit-category-screen');

class ManageCategoriesScreen extends Screen {
  constructor(rl, state, previousScreen) {
    super(rl, state, previousScreen);
    this.editCategoryScreen = new EditCategoryScreen(rl, state, this);
  }

  show() {
    this.printHeader('CATEGORIES');
    const categories = this.state.getCategories();
    this.printMenu(categories);

    this.rl.question("> ", answer => {
      if (["1", "2", "3", "4", "5"].includes(answer)) {
        const index = Number.parseInt(answer) - 1;
        this.editCategoryScreen.setCurrentCategoryIndex(index);
        this.editCategoryScreen.show();
      } else {
        this.previousScreen.show();
      }
    });
  }
}

exports.ManageCategoriesScreen = ManageCategoriesScreen;


