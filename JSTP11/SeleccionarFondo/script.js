const input = document.getElementById('colorInput');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.body.style.backgroundColor = input.value;
        input.value = ''; 
    }
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        document.body.style.backgroundColor = 'white';
    }
});
