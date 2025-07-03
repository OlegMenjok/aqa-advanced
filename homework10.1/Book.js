export class Book {
  constructor(name, author, year) {
    this._name = name;
    this._author = author;
    this._year = year;
  }

  printInfo() {
    console.log(
      `Book name is '${this.name}', author is '${this.author}', and year: ${this.year}`,
    );
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (!value) throw new Error("Value should be not empty");
    this._name = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (!value) throw new Error("Value should be not empty");
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (value <= 0) throw new Error("Value should be not less or equal 0");
    this._year = value;
  }

  static arrayOfEntity(...books) {
    return books.reduce((min, curr) => {
      return curr._year < min._year ? curr : min;
    });
  }
}

export const book1 = new Book("History of secret town", "Unknown", 1834);
book1.year = 1999;
book1.printInfo();

export const book2 = new Book("Control Your Mind", "Eric Robertson", 2019);
book2.printInfo();
