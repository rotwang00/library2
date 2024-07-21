'use strict';

const library = [];
let bookID = 1;

const display = document.getElementById('books-display');
const addBookButton = document.getElementById('addBook');
const sortByTitleButton = document.getElementById('sortByTitle');
const sortByAuthorButton = document.getElementById('sortByAuthor');
const sortByLengthButton = document.getElementById('sortByLength');
const addBookModal = document.querySelector('dialog');

function createBook(title, author, pages, hasRead) {
  return {
    title,
    author,
    pages,
    hasRead,
    bookID,
  };
}

function addBookToLibrary(title, author, pages, hasRead) {
  let book = createBook(title, author, pages, hasRead);
  library.push(book);
  bookID++;
  displayBooks();
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

    let newReadButton = document.createElement('button');
    newReadButton.textContent = 'Toggle read';
    newReadButton.classList.add('readToggleButton');
    newReadButton.addEventListener('click', () => {
      book.hasRead = !book.hasRead;
      displayBooks();
    });
    newBook.appendChild(newReadButton);

    let newDeleteButton = document.createElement('button');
    newDeleteButton.textContent = 'Remove';
    newDeleteButton.classList.add('deleteButton');
    newDeleteButton.addEventListener('click', () => {
      if (confirm(`Are you sure you want to remove ${book.title}?`)) {
        let i = library.indexOf(book);
        library.splice(i, 1);
        displayBooks();
      }
    });
    newBook.appendChild(newDeleteButton);

    newBook.classList.add('book');
    display.appendChild(newBook);
  }
}

addBookButton.addEventListener('click', () => {
  addBookModal.showModal();
});

sortByTitleButton.addEventListener('click', () => {
  library.sort((a, b) => a.title.localeCompare(b.title));
  displayBooks();
});

sortByAuthorButton.addEventListener('click', () => {
  library.sort((a, b) => a.author.localeCompare(b.author));
  displayBooks();
});

sortByLengthButton.addEventListener('click', () => {
  library.sort((a, b) => a.pages - b.pages);
  displayBooks();
});

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
