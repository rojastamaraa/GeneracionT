document.getElementById('showMoney').addEventListener('click', function() {
    toggleImage('money');
});
document.getElementById('showMiami').addEventListener('click', function() {
    toggleImage('miami');
});
document.getElementById('showMaiameee').addEventListener('click', function() {
    toggleImage('maiameee');
});

function toggleImage(imageId) {
    const img = document.getElementById(imageId);
    img.classList.toggle('oculto');
}

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function() {
        this.classList.add('oculto');
    });
});