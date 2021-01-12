const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { MainScreen } = require('./screens/main-screen');
const { TaskList } = require('./TaskList');
const { exit } = require('process');

const filePath = path.join(process.cwd(), 'tasks.json');
const rl = readline.createInterface(process.stdin, process.stdout);

fs.readFile(filePath, 'utf-8', (_, data) => {
  let taskList = new TaskList(filePath);
  if (data) {
    taskList.loadFromJson(data);
  }
  new MainScreen(rl, taskList).show();
});
