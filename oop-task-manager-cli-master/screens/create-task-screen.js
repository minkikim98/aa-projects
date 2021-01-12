// IMPORTANT! IMPORTANT!
// ---------------------------------------------------------------------
// ALL SCREEN CLASSES HAVE A this.state INSTANCE VARIABLE THAT HOLDS THE
// APPLICATION STATE CREATED IN THE program.js. WHENEVER YOUR CODE NEEDS
// TO INTERACT WITH THE STATE IN ONE OF THE FOLLOWING CLASSES, DO IT
// THROUGH THE this.state INSTANCE VARIABLE.
const { Screen } = require('./screen');

class CreateTaskScreen extends Screen {
  constructor(rl, state, previousScreen) {
    super(rl, state, previousScreen);
  }

  askForTitle() {
    this.printHeader('CREATE A TASK');
    console.log("What is the title?");
    console.log();
    this.rl.question("> ", title => {
      this.title = title;
      this.askForCategory(title);
    });
  }

  askForCategory(title) {
    this.printHeader('CREATE A TASK');
    console.log(`TITLE: ${title}`);
    console.log();
    console.log("What is the category?");
    console.log();
    this.state.getCategories().forEach((category, index) => {
      console.log(`${index + 1}. ${category}`);
    });
    console.log();
    this.rl.question("> ", categoryScreenIndex => {
      if (["1", "2", "3", "4", "5"].includes(categoryScreenIndex)) {
        const categoryIndex = categoryScreenIndex - 1;
        this.askForDescription(title, categoryIndex);
      } else {
        this.show();
      }
    });
  }

  askForDescription(title, categoryIndex) {
    this.printHeader('CREATE A TASK');
    console.log();
    console.log(`TITLE: ${title}`);
    console.log(`CATEGORY: ${this.state.getCategoryByIndex(categoryIndex)}`);
    console.log();
    console.log("(Type your title and hit \"Enter\" to return to");
    console.log("the to-do list screen, 300 characters max.)");
    console.log();
    console.log("What is the description?");
    console.log();
    this.rl.question("> ", description => {
      this.description = description;
      this.state.addTask(title, description, categoryIndex);
      this.state.save();
      this.previousScreen.show();
    });
  }

  show() {
    this.askForTitle();
  }
}

module.exports = {
  CreateTaskScreen
};

