//Matemática Simple

function triplicador(num) {
    return num * 3;
}

function multiplicador(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function resto(num1, num2) {
    return num1 % num2;
}

let valorTriplicado = triplicador(5); 
let valorMultiplicado = multiplicador(valorTriplicado, 12); 
let valorDividido = division(valorMultiplicado, 12); 
let valorResto = resto(valorDividido, 3);


//contarDeA_n

function contarDeA_n(contar_de_a, contar_hasta) {
    for (let i = 1; i <= contar_hasta; i += contar_de_a) {
        console.log(i);
    }
}


contarDeA_n(2, 10);


//Desafío FizzBuzz II

function fizzBuzz2(palabra1, palabra2, hasta, fizz_num, buzz_num) {
    let resultado = [];
    for (let i = 1; i <= hasta; i++) {
        if (i % fizz_num === 0 && i % buzz_num === 0) {
            resultado.push(palabra1 + palabra2);
        } else if (i % fizz_num === 0) {
            resultado.push(palabra1);
        } else if (i % buzz_num === 0) {
            resultado.push(palabra2);
        } else {
            resultado.push(i);
        }
    }
    return resultado.join(', ');
}

console.log(fizzBuzz2("Fizz", "Buzz", 15, 3, 5));