const nav = document.querySelector('nav');
document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('fixed');
        console.log("esfixed");
    } else {
        nav.classList.remove('fixed');
        console.log("noesfixed");
    }
})
