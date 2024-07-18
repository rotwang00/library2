'use strict';

const library = [];

const display = document.getElementById('books-display');

function createBook(title, author, pages, hasRead) {
  return {
    title,
    author,
    pages,
    hasRead,
  };
}

function addBookToLibrary(title, author, pages, hasRead) {
  let book = createBook(title, author, pages, hasRead);
  library.push(book);
}

function displayBooks() {
  // Remove all children
  let child = display.lastElementChild;
  while (child) {
    display.removeChild(child);
    child = display.lastElementChild;
  }

  // Add books
  for (let book of library) {
    let newBook = document.createElement('div');
    newBook.textContent = `${book.title} by ${book.author}\n`;
    newBook.classList.add('book');
    display.appendChild(newBook);
  }
}

addBookToLibrary('Dune', 'Herbert', 600, true);
addBookToLibrary('Cryptonomicon', 'Stephenson', 700, true);
addBookToLibrary('East of Eden', 'Steinbeck', 400, false);
addBookToLibrary('Gardens of the Moon', 'Erikson', 800, true);
addBookToLibrary('Crime and Punishment', 'Dostoevsky', 400, false);
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", 'Adams', 200, false);
addBookToLibrary('The Idiot', 'Dostoevsky', 400, false);
addBookToLibrary('Little Women', 'Alcott', 300, false);
addBookToLibrary("Gravity's Rainbow", 'Pynchon', 800, true);
addBookToLibrary('The Blind Watchmaker', 'Dawkins', 78, false);
addBookToLibrary('Trouble at the Old Well', 'Lassie', 8, true);

displayBooks();
