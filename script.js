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

let myLibrary = [];

document.getElementById('add').addEventListener('click', () => {

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

    // Book prototype function that toggles a book instance’s read status.
    Book.prototype.toggle = function () {
        return '<button id=status onclick=toggle(this)>' + this.status + '</button>'
    }

    if (title.length > 0 && author.length > 0 && pages.length > 0) {
        let newBook = new Book(title, author, pages, status);
        console.log(newBook);
        myLibrary.push(newBook);
        console.log(myLibrary);
    };

    const content = document.getElementById('content');
    const div = document.createElement('div');
    const deleteButton = document.createElement('button');

    // Loops through the array and displays each book on the page. 
    myLibrary.forEach((Book) => {
        content.appendChild(div);
        div.setAttribute('id', Book.ref);
        div.innerHTML = '<b>' + Book.title + '</b>' + '<br>' + Book.author + '<br>' + Book.pages + ' pages' + Book.toggle()

        div.appendChild(deleteButton);
        deleteButton.setAttribute('id', Book.ref);
        deleteButton.setAttribute('onclick', 'remove(this)');
        deleteButton.textContent = 'delete';
    })

});

/* toggles status button 
function toggle(e) {
    if (e.innerHTML == 'read') {
        e.innerHTML = 'unread'
    }
    else {
        e.innerHTML = 'read';
    }
}

function remove(e) {
    console.log(e);

    const id = document.getElementById(e.id);
    console.log(id);
    id.remove();

    myLibrary = myLibrary.filter((Book) => Book.ref != e.id);
    console.log(myLibrary);
}
*/
