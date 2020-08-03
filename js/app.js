class Task {
  constructor(id, name, description, assignedTo, dueDate, status) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.assignedTo = assignedTo;
    this.dueDate = dueDate;
    this.status = status;
  }

  addTask() {
    //return a JS object
    return `a JS object`;
  }
  clearForm() {}
}

const task1 = new Task(
  1,
  'a new task',
  'a new task what I just made',
  '03-08-2020',
  'TODO'
);

task1.addTask();

const taskList = [
  { id: 1, name: 'a name', description: 'blah blah blah' },
  { id: 2, name: 'a name', description: 'blah blah blah' },
];

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author.first} ${this.author.last} in ${this.year}`;
  }
}
class Author {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
}
