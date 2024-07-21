// Activity 1 : object creation and access
//Task 1: create object representing a book with properties like title , author , year ;
const book = {
  title: "Atomic Habit",
  author: "Stephen Covey",
  year: 2019,
  method1: function () {
    return `${this.title} - ${this.author}`;
  },
  method2: function (year) {
    this.year = year;
    return this.year;
  },
  method3: function () {
    return this.title + " " + this.year ;
  },
};

// Task 2: access the book title and author ;
console.log(book);
console.log(book.title, book.author);

// Activity 2 : object methods

// Task 3: create a method in the book object to change the author's name ;

console.log(book.method1());
console.log(book.method2(2001));
console.log(book);

// Activity 3 : nested objects
const libraray = {
  name: "Rich dad poor dad",
  books: ["To Kill a Mockingbird", "Harper Lee"],
};

console.log(libraray);
console.log(libraray.name, libraray.books[0], libraray.books[1]);

// Activity 4 : The this keywoed

console.log(book.method3());

// Activity 5 : Objects iterations

// Task 8: use for in loop to iterate ;

console.log('---iteration using for in loop-----') ;
for(let key in book){
    console.log(key, book[key]);
}

// Task 9: use object.key and object.values method to print

console.log('---iteration using object.keys and object.values-----') ;
console.log(Object.keys(book));
console.log('-----')
console.log(Object.values(book));



