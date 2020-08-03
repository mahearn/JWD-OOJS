class Task {
  constructor(title, description, status, date, assignee) {
    this.title = title;
    this.description = description;
    //...
  }
  validate() {
    this.title && this.title.length > 8;
  }
  toHTML() {
  }
}
class TaskManager {
  constructor() {
    tasks = [];
    this.currentId = 1;
  }
  createTask() {
    return new Task(...)
  }
  deleteTask() {
    // go to array and delete task
  }
  toHTML() {
    // for each task call toHTML
  }
}
const task = new Task("Get Groceries", "Buy milk, bread and cheese",)
task.validate()
task.toHTML()