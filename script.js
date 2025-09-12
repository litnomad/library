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
        this.ref = window.crypto.randomUUID();  
        this.info = function () {
            return '<div>' + '<b>' + this.title + '</b>' + '</div>' + '<div>' + this.author + '</div>' + '<div>' + this.pages + " pages" + '</div>'
        };
    };

    // Book prototype function that toggles a book instance’s read status
    Book.prototype.toggle = function () {
        return '<button ' + 'id=' + this.ref + ' onclick=toggle(this)>' + this.status + '</button>'
    }

    if (title.length > 0 && author.length > 0 && pages.length > 0) {
        let newBook = new Book(title, author, pages, status);
        console.log(newBook);
        myLibrary.push(newBook);
        console.log(myLibrary);
    };

    // Loops through the array and displays each book on the page
    const content = document.getElementById('content');
    const div = document.createElement('div');
    const deleteButton = document.createElement('button');

    myLibrary.forEach((Book) => {
        content.appendChild(div);
        div.setAttribute('id', Book.ref);
        div.innerHTML = Book.info() + Book.toggle();

        div.appendChild(deleteButton);
        deleteButton.setAttribute('id', Book.ref);
        deleteButton.setAttribute('onclick', 'remove(this)');
        deleteButton.textContent = 'delete';
    })

});

// Toggles read status
function toggle(e) {
    for (const Book of myLibrary) {
        if (e.id === Book.ref) {
            if (e.innerHTML === 'read') {
                Book.status = 'unread';
                e.innerHTML = 'unread';
            }
            else { Book.status = 'read'; e.innerHTML = 'read' }
        }
    }
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

