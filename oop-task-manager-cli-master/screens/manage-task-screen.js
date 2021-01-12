// IMPORTANT! IMPORTANT!
// ---------------------------------------------------------------------
// ALL SCREEN CLASSES HAVE A this.state INSTANCE VARIABLE THAT HOLDS THE
// APPLICATION STATE CREATED IN THE program.js. WHENEVER YOUR CODE NEEDS
// TO INTERACT WITH THE STATE IN ONE OF THE FOLLOWING CLASSES, DO IT
// THROUGH THE this.state INSTANCE VARIABLE.

const { Screen } = require('./screen');
const { CreateTaskScreen } = require('./create-task-screen');
const { TaskDetailScreen } = require('./task-detail-screen');

class ManageTasksScreen extends Screen {
  constructor(rl, state, previousScreen) {
    super(rl, state, previousScreen);
    this.index = 0;
    this.createTaskScreen = new CreateTaskScreen(rl, state, this);
    this.taskDetailScreen = new TaskDetailScreen(rl, state, this);
  }

  show() {
    this.printHeader('TO-DO ITEMS');
    console.log();
    console.log("A. Add a new item");
    console.log();
    const incompleteTasks = this.state.getIncompleteTasks();
    this.printMenu(incompleteTasks.map(task => task.getShortText()));
    this.rl.question("> ", answer => {
      const index = Number.parseInt(answer);
      if (answer === "A") {
        this.createTaskScreen.show();
      } else if (answer.toLowerCase() === "x") {
        this.previousScreen.show();
      } else if (!isNaN(index)) {
        this.taskDetailScreen.setCurrentTask(incompleteTasks[index - 1]);
        this.taskDetailScreen.show();
      } else {
        this.show();
      }
    });
  }
}

exports.ManageTasksScreen = ManageTasksScreen;

