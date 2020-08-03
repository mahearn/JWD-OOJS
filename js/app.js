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
