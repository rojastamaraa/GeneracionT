const button = document.getElementById('beepButton');

function seEjecutaEnEvento() {
    document.body.insertAdjacentHTML('beforeend', '<p>BEEP</p>');
    document.body.classList.toggle('color');
}

button.addEventListener('click', seEjecutaEnEvento);
