const autoRojo = document.querySelector('#autoRojo');
const autoAzul = document.querySelector('#autoAzul');

let acumuladorRojo = 0;
let acumuladorAzul = 0;

window.addEventListener('keyup', (event) => {
    if (event.key === 'r') {
        acumuladorRojo += 10; 
        autoRojo.style.marginLeft = `${acumuladorRojo}px`; 

        if (acumuladorRojo >= 550) { 
            alert("¡El auto rojo ganó la carrera!");
            document.querySelector('.pista').style.backgroundColor = "red";
            resetRace();
        }
    }

    if (event.key === 'a') {
        acumuladorAzul += 10; 
        autoAzul.style.marginLeft = `${acumuladorAzul}px`; 

        if (acumuladorAzul >= 550) { 
            alert("¡El auto azul ganó la carrera!");
            document.querySelector('.pista').style.backgroundColor = "blue";
            resetRace();
        }
    }
});

function resetRace() {
    acumuladorRojo = 0;
    acumuladorAzul = 0;
    autoRojo.style.marginLeft = '0px';
    autoAzul.style.marginLeft = '0px';
    document.querySelector('.pista').style.backgroundColor = "#eaeaea"; 
}
