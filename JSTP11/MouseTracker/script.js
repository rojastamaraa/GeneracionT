const img = document.getElementById('follow-img');
let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        img.style.top = event.clientY + 'px';
        img.style.left = event.clientX + 'px';
    }
});
