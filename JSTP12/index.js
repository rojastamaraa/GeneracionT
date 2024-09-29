const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

function randomWords() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

let palabraAleatoria = randomWords();
let time = 10; 
let score = 0; 
let interval;

function addToDOM() {
    const h1Element = document.getElementById('randomWord');
    h1Element.textContent = palabraAleatoria; 
}


addToDOM();


const inputElement = document.getElementById('text');


inputElement.addEventListener('input', handleInput);

function handleInput(e) {
    console.log(e); 
    
    let palabraIngresada = e.target.value; 

    if (palabraIngresada === palabraAleatoria) {
        time += 3;
        updateScore();
        inputElement.value = ''; 
        addToDOM(); 
    }
}

function updateScore() {
    score++; 
    document.getElementById('score').textContent = score; 
}

function actualizarTiempo() {
    interval = setInterval(() => {
        if (time > 0) {
            time--; 
            document.getElementById('timeSpan').textContent = `${time}s`; 
        } else {
            clearInterval(interval); 
            gameOver(); 
            document.querySelector('.main').style.display = 'none'; 
        }
    }, 1000); 
}

function gameOver() {
    clearInterval(interval); 

    const endGameContainer = document.getElementById('end-game-container');
    endGameContainer.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = '¡Juego Terminado!';

    const scoreMessage = document.createElement('p');
    scoreMessage.textContent = `Tu puntaje final es: ${score}`;

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Reiniciar Juego';
    restartButton.addEventListener('click', () => {
        location.reload(); 
    });

    endGameContainer.appendChild(title);
    endGameContainer.appendChild(scoreMessage);
    endGameContainer.appendChild(restartButton);
}

actualizarTiempo();