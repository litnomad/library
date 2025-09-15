const content = document.querySelector('#content');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const submit = document.querySelector('#add');
const form = document.querySelector('fieldset');

form.style.visibility = 'hidden';

document.querySelector('.btn').addEventListener('click', () => {
    if (form.style.visibility === 'hidden') {
        form.style.visibility = 'visible';
    }
    else {
        form.style.visibility = 'hidden';
    };
}
);

let myLibrary = [];

function Book() {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = read.value;
    this.ref = window.crypto.randomUUID();
};

// Book prototype function that toggles a book instance’s read status
Book.prototype.toggle = function () {
    return '<button ' + 'id=' + this.ref + ' onclick=toggle(this)>' + this.read + '</button>'
}

function addToLibrary() {
    const read = document.querySelector('input[name="status"]:checked');
    if (title.value.length > 0 && author.value.length > 0 && pages.value.length > 0) {
        let newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        console.log(myLibrary);
    };
}

function displayLibrary() {
    // Loops through the array and displays each book on the page
    const div = document.createElement('div');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const statusToggle = document.createElement('p');
    const deleteButton = document.createElement('button');

    myLibrary.forEach((Book) => {
        content.appendChild(div);
        div.setAttribute('id', Book.ref);

        div.appendChild(bookTitle);
        div.appendChild(bookAuthor);
        div.appendChild(bookPages);
        div.appendChild(statusToggle);

        bookTitle.textContent = Book.title;
        bookAuthor.textContent = Book.author;
        bookPages.textContent = Book.pages;
        statusToggle.innerHTML = Book.toggle();

        div.appendChild(deleteButton);
        deleteButton.setAttribute('id', Book.ref);
        deleteButton.setAttribute('onclick', 'remove(this)');
        deleteButton.textContent = 'delete';
    })
}

// Toggles read status
function toggle(e) {
    for (const Book of myLibrary) {
        if (e.id === Book.ref) {
            if (e.innerHTML === 'read') {
                Book.read = 'unread';
                e.innerHTML = 'unread';
            }
            else { Book.read = 'read'; e.innerHTML = 'read' }
        }
    }
    console.log(myLibrary);
}

// Deletes book from the library
function remove(e) {
    console.log(e);

    const id = document.getElementById(e.id);
    console.log(id);
    id.remove();

    myLibrary = myLibrary.filter((Book) => Book.ref != e.id);
    console.log(myLibrary);
}

submit.addEventListener('click', () => {
    addToLibrary();
    displayLibrary();
});
