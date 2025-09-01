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

document.getElementById('new').addEventListener('click', () => {
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
            return '<b>' + this.title + '</b>' + '<br>' + 'by ' + this.author + '<br>' + this.pages + " pages" + '<br>' + this.status
        };
    };

    // Write a function that loops through the array and displays each book on the page.
    const myLibrary = [];

    if (title.length > 0 && author.length > 0 && pages.length > 0) {

        const newBook = new Book(title, author, pages, status);
        myLibrary.push(newBook.info());
        console.log(myLibrary);

        myLibrary.forEach(myFunction)
        function myFunction(value, index, array) {
            const content = document.getElementById('content');
            const div = document.createElement('div');
            div.setAttribute('id', 'card');
            content.appendChild(div);
            div.innerHTML = value;

            // Add a button on each book’s display to remove the book from the library.
        }

    };


});


