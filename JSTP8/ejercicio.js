/*Ejer 2*/

alert("¡Bienvenido a mi página!");
let name = prompt("¿Cómo te llamas?");
alert("¡Hola " + name + "!");
let age = prompt("¿Cuántos años tenes?");
console.log(name + " tiene " + age + " años.");
alert("¡Gracias por tu visita, " + name + "!");

/*Ejer 3*/

let nombre = name;
let edad = 18;
let cumpleaños = "27/01/2006";
let ciudad = "CABA";
let ocupacion = "programadora";
let pasatiempos = ["programar", "leer", "jugar"];

console.log("Hola, " + nombre + ". Soy de " + ciudad + " y tengo " + edad + " años. Soy " + ocupacion + " y en mi tiempo libre me gusta " + pasatiempos.join(", ") + ".");
let apellido = "Gozales", altura = 170, provincia = "Buenos Aires";

/*Ejer 4*/

let texto = prompt("Ingresa un texto breve:");

let cantCaracteres = texto.length;

console.log("Tu texto tiene " + cantCaracteres + " caracteres.");

/*Ejer 5*/

let edadUsuario = parseInt(prompt("Ingresa tu edad:"));
let diasVividos = edadUsuario * 365;
console.log("Has vivido aproximadamente " + diasVividos + " días.");

/*Ejer 6*/
let num1 = parseFloat(prompt("Ingresa el primer numero:"));
let num2 = parseFloat(prompt("Ingresa el segundo numero:"));
let resultado = num1 + num2;
console.log("La suma de los números es:", resultado);

/*Ejer 7*/

let edadActual = parseInt(prompt("Ingresa tu edad actual:"));
let edadMaxima = parseInt(prompt("Ingresa tu edad máxima:"));
let snackFavorito = prompt("Ingresa el nombre de tu snack favorito:");
let snacksPorDia = parseInt(prompt("¿Cuántos snacks comes por día?"));

let aniosRestantes = edadMaxima - edadActual;
let diasRestantes = aniosRestantes * 365;
let snacksTotales = snacksPorDia * diasRestantes;

alert(`Necesitaras **${snacksTotales}** ${snackFavorito} para que te alcancen hasta los ${edadMaxima} años.`);

let precioUnidad = parseFloat(prompt("Ingresa el precio por unidad de tu snack:"));
let costoTotal = snacksTotales * precioUnidad;

if (precioUnidad) {
  alert(`El costo total de snacks para el resto de tu vida seria de aproximadamente $${costoTotal.toFixed(2)}.`);
}

/*Ejer 8*/
let diasViaje = parseInt(prompt("¿Cuantos días vas a estar de viaje?"));
let presupuestoTotal = parseFloat(prompt("Ingresa tu presupuesto máximo para comida:"));

let presupuestoDiario = presupuestoTotal / diasViaje;

alert(`Podrás gastar hasta $${presupuestoDiario.toFixed(2)} por comida cada día para que te alcance la plata durante los ${diasViaje} días de viaje.`);