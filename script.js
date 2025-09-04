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
const myLibrary = [];

document.getElementById('add').addEventListener('click', () => {
    content = document.getElementById('content');
    button = document.createElement('button');
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
        this.info = function () {
            return '<b>' + this.title + '</b>' + '<br>' + this.author + '<br>' + this.pages + " pages" + '<br>' + this.status
        };
    };

    if (title.length > 0 && author.length > 0 && pages.length > 0) {
        const newBook = new Book(title, author, pages, status);
        myLibrary.push(newBook.info());

        content.appendChild(div);
        div.setAttribute('id', 'card');
        div.innerHTML = newBook.info();

        div.appendChild(button);
        button.setAttribute('id', 'delete');
        button.setAttribute('onclick', 'remove(this)');
        button.textContent = 'delete';

    };

    for (let i = 0; i < myLibrary.length; i++) {
        div.setAttribute('class', [i]);
        button.setAttribute('class', [i]);
    }

});

function remove(e) {
    e.parentElement.remove();
}
