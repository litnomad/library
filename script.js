const body = document.querySelector('body');
const form = document.querySelector('fieldset');

form.style.visibility = 'hidden';

document.getElementById('btn').addEventListener('click', () => {
    if (form.style.visibility === 'hidden') {
        form.style.visibility = 'visible';
    }
    else {
        form.style.visibility = 'hidden';
    };
}
);

let content;
let deleteButton;
let statusButton;
let div;
let myLibrary = [];

document.getElementById('add').addEventListener('click', () => {
    content = document.getElementById('content');
    deleteButton = document.createElement('button');
    statusButton = document.createElement('button');
    div = document.createElement('div');
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    function Book() {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.ref = window.crypto.randomUUID();  // This ensures each book has a unique and stable identifier, preventing issues when books are removed or rearranged.
        this.info = function () {
            return '<b>' + this.title + '</b>' + '<br>' + this.author + '<br>' + this.pages + " pages"
        };
    };

    if (title.length > 0 && author.length > 0 && pages.length > 0) {
        let newBook = new Book(title, author, pages, status);
        console.log(newBook)
        myLibrary.push(newBook);

        content.appendChild(div);
        div.setAttribute('id', newBook.ref);
        div.innerHTML = newBook.info();

        div.appendChild(statusButton);
        statusButton.setAttribute('id', 'status');
        statusButton.innerHTML = newBook.status;

        div.appendChild(deleteButton);
        deleteButton.setAttribute('id', newBook.ref);
        deleteButton.setAttribute('onclick', 'remove(this)');
        deleteButton.textContent = 'delete';

    };

    // Add a button on each book’s display to change its read status.
    // To facilitate this you will want to create Book prototype function that toggles a book instance’s read status.
    Book.prototype.statusUpdate = function statusUpdate() {
        // clicking status button to change this.status

    }

});

function remove(e) {
    console.log(e);

    const id = document.getElementById(e.id);
    console.log(id);
    id.remove();

    myLibrary = myLibrary.filter((Book) => Book.ref != e.id);
    console.log(myLibrary);
}