const fs = require('fs');
const { Task } = require('./Task');

class TaskList {
  constructor(filePath) {
    this.categories = [
      "Grocery",
      "Household",
      "Garden",
      "Schoolwork",
      "Misc",
    ];
    this.filePath = filePath;
    this.tasks = [];
  }

  addTask(title, description, categoryIndex) {
    // TODO: Instantiate a new task
    // TODO: Add the tasks into the task lists' `this.tasks` array
    let newTask = new Task(title, description, categoryIndex);
    this.tasks.push(newTask);
  }

  getTasks() {
    // TODO: Return all tasks
    return this.tasks;
  }

  getIncompleteTasks() {
    // TODO: Return all incompleted tasks
    return this.tasks.filter(task => !task.completionStatus);
  }

  getCompletedTasks() {
    // TODO: Return all completed tasks
    return this.tasks.filter(task => task.completionStatus);
  }

  getTaskByIndex(index) {
    // TODO: Return a task by its index
    return this.tasks[index];
  }

  getCategoryByIndex(index) {
    // TODO: Return a task list category by its index
    return this.categories[index];
  }

  getCategories() {
    // TODO: Return all the task list categories
    return this.categories;
  }

  setCategory(index, value) {
    // TODO: Index into the selected category from the `this.categories` array
    //       and update the value of that category index
    this.categories[index] = value;
  }

  searchByTerm(searchTerm) {
    // TODO: Return an array of search results for a task by a searchTerm
    return this.tasks.filter(task => task.matches(searchTerm));
  }

  loadFromJson(json) {
    const { categories, tasks } = JSON.parse(json);

    for (let i = 0; i < categories.length; i += 1) {
      this.categories[i] = categories[i];
    }

    for (let i = 0; i < tasks.length; i += 1) {
      const taskData = tasks[i];
      const {
        title,
        description,
        categoryIndex,
        completed, } = taskData;
      const task = new Task(title, description, categoryIndex, completed);
      this.tasks.push(task);
    }
  }

  save() {
    const data = {
      tasks: this.tasks,
      categories: this.categories,
    };
    fs.writeFile(this.filePath, JSON.stringify(data), err => { });
  }
}

module.exports = {
  TaskList
};