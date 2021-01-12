// IMPORTANT! IMPORTANT!
// ---------------------------------------------------------------------
// ALL SCREEN CLASSES HAVE A this.state INSTANCE VARIABLE THAT HOLDS THE
// APPLICATION STATE CREATED IN THE program.js. WHENEVER YOUR CODE NEEDS
// TO INTERACT WITH THE STATE IN ONE OF THE FOLLOWING CLASSES, DO IT
// THROUGH THE this.state INSTANCE VARIABLE.
const { Screen } = require('./screen');

class TaskDetailScreen extends Screen {
  constructor(rl, state, previousScreen) {
    super(rl, state, previousScreen);
    this.currentTask = null;
  }

  printTask() {
    const category = this.state.getCategoryByIndex(this.currentTask.categoryIndex);
    console.log();
    console.log(`TITLE: ${this.currentTask.title}`);
    console.log(`CATEGORY: ${category}`);
    console.log("DESCRIPTION");
    console.log(this.currentTask.description);
    console.log();
  }

  setCurrentTask(task) {
    this.currentTask = task;
  }

  show() {
    if (this.currentTask) {
      this.printHeader('TO-DO ITEM (TASK)');
      this.printTask(this.currentTask);
      console.log("Type \"C\" and hit \"Enter\" to complete this");
      console.log("task and return to the list screen. Just");
      console.log("hit \"Enter\" to return to the list screen.");
      this.rl.question("> ", answer => {
        if (answer === "C") {
          this.currentTask.complete();
          this.state.save();
        }
        this.previousScreen.show();
      });
    } else {
      this.previousScreen.show();
    }
  }
}

exports.TaskDetailScreen = TaskDetailScreen;