const magiaDiv = document.getElementById('magia');
const imagen = document.getElementById('magica');

magiaDiv.addEventListener('mouseover', () => {
    imagen.style.display = 'none';
});

magiaDiv.addEventListener('mouseout', () => {
    imagen.style.display = 'block';
});