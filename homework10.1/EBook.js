import { Book } from "./Book.js";
import { book1, book2 } from "./Book.js";

class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year)
        this._format = format;
    }

    printInfo(){
        console.log(`Book name is '${this.name}', author is '${this.author}', and year: ${this.year}, and format is ${this.format}`)
    }

    get format(){
        return this._format;
    }

    set format (value) {
        if (value <= 0) throw new Error('Value should be not less or equal 0')
        this._format = value
    }

    static createEBook(book, format){
        return new EBook(book.name, book.author, book.year, format )
    }
}

const ebook1 = new EBook('Madagaskar', 'Tom Taylor', 2010, 'Electronic book')
ebook1._author = 'Ted';
ebook1.printInfo()

const earlierBook = EBook.arrayOfEntity(ebook1, book1, book2) // task 4
console.log(earlierBook)

const createdBook = EBook.createEBook(book1, 'PDF') // task 5
console.log(createdBook)