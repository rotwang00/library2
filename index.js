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
  // Clear display by removing all children
  let child = display.lastElementChild;
  while (child) {
    display.removeChild(child);
    child = display.lastElementChild;
  }

  // Add books
  for (let book of library) {
    let newBook = document.createElement('div');

    let newTitle = document.createElement('p');
    newTitle.textContent = book.title;
    newTitle.classList.add('title');
    newBook.appendChild(newTitle);

    let newAuthor = document.createElement('p');
    newAuthor.textContent = book.author;
    newAuthor.classList.add('author');
    newBook.appendChild(newAuthor);

    let newPages = document.createElement('p');
    newPages.textContent = book.pages;
    newPages.classList.add('pages');
    newBook.appendChild(newPages);

    let newRead = document.createElement('p');
    if (book.hasRead == true) {
      newRead.textContent = "I've read it";
    } else {
      newRead.textContent = 'Not read yet';
    }
    newRead.classList.add('read');
    newBook.appendChild(newRead);

    // newBook.textContent = `${book.title} by ${book.author}\n`;
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
