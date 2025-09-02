

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
let button;
let div;

document.getElementById('new').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    content = document.getElementById('content');
    button = document.createElement('button');
    div = document.createElement('div');

    const myLibrary = [];

    function Book() {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.info = function () {
            return '<b>' + this.title + '</b>' + '<br>' + this.author + '<br>' + this.pages + " pages" + '<br>' + this.status
        };
    };

    if (title.length > 0 && author.length > 0 && pages.length > 0) {

        const newBook = new Book(title, author, pages, status);
        myLibrary.push(newBook.info());

        myLibrary.forEach(myFunction)
        function myFunction(value, index, array) {
            content.appendChild(div);
            div.setAttribute('class', 'card');
            div.innerHTML = value;
            div.setAttribute('id', newBook);

            // Add a button on each book’s display to remove the book from the library.
            div.appendChild(button);
            button.textContent = 'delete';
            button.setAttribute('id', newBook);
            button.setAttribute('onclick', 'deleteBook()');
        }

        /*for (let i = 1; i <= myLibrary.length; i++){
            content.appendChild(div);
            div.setAttribute('class', 'card');
            div.innerHTML = newBook.info();
            div.setAttribute('id', [i]);
            div.appendChild(button);
            button.textContent = 'delete';
            button.setAttribute('id', [i]);
            button.setAttribute('onclick', 'deleteBook()');
        };*/

    };


});

function deleteBook() {
    if (div.id === button.id) {
        div.remove();
    }
}

