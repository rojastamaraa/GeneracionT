const paragraphs = document.querySelectorAll('p');

for (let p of paragraphs) {
    p.addEventListener('click', () => {
        p.classList.toggle('resaltado');
    });
}
