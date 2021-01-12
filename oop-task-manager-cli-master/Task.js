class Task {
  constructor(title, description, categoryIndex) {
    // TODO: Set up constructor that sets the task's title, description, 
    //       categoryIndex, and completion status (with a default of false)
    this.title = title;
    this.description = description;
    this.categoryIndex = categoryIndex;
    this.completionStatus = false;
  }

  complete() {
    // TODO: Set the completion status to be true
    this.completionStatus = true;
  }

  getShortText() {
    // TODO: Return a shortened version of the task's title (max 70 chars)
    return this.title.slice(0, 70);
  }

  matches(searchTerm) {
    // TODO: Return true of false depending on whether a
    //       searchTerm is in the task's title
    return this.title.includes(searchTerm);
  }
}

module.exports = {
  Task
};
