const body = document.querySelector('body');
const form = document.querySelector('fieldset');


form.style.visibility = 'hidden';

document.getElementById('btn').addEventListener('click', () => {
    if (form.style.visibility === 'hidden') {
        form.style.visibility = 'visible';
    }
    else {
        form.style.visibility = 'hidden';
    }
    }
)

document.getElementById('new').addEventListener('click', () => {
    const div = document.createElement('div');
    body.appendChild(div);
    div.style.border = 'thin solid grey'
})