/*
1.A) 2
1.B) 3

2.A) undefined
2.B) undefined
2.C) Montevideo
2.D) Buenos Aires
2.E) Buenos Aires
2.F) undefined

3)
let nuevoUsuario = {
   usuario: "nombreDeUsuario",
   edad: 25,
   direccion: "Calle Falsa 123, Ciudad, País",
   fechaNacimiento: "1998-09-27",
   contrasena: "miContrasenaSegura123"  
}

4) 

let miAuto = {};
miAuto.marca = "Toyota";
miAuto.año = 2021;
miAuto.nuevo = true;
let propertyKey = "modelo";
miAuto[propertyKey] = "Corolla";
let anotherPropertyKey = "precio";
miAuto[anotherPropertyKey] = 20000;
let nextProperty = "color";
miAuto[nextProperty] = "Rojo";

for (let key in miAuto) {
   console.log(key + ": " + miAuto[key]);
}

¿Qué devuelve miAuto[propertyKey]?

Devuelve "Corolla"

¿Qué devuelve miAuto["modelo"]?

Devuelve "Corolla"

¿Qué devuelve miAuto[nextProperty]?

Devuelve "Rojo"

¿Qué devuelve miAuto["color"]?

También devuelve "Rojo"

5)

let estudiantes = [
  { nombre: "Juan", nota: 6 },
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "María", nota: 9 },
  { nombre: "Pedro", nota: 5 }
];

function aumentarNota(estudiantes) {
  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota > 5) {
      estudiantes[i].nota += 2; // Aumenta la nota en 2 puntos
      if (estudiantes[i].nota > 10) {
        estudiantes[i].nota = 10; // No permitir que la nota supere 10
      }
    }
  }
}

aumentarNota(estudiantes);

console.log(estudiantes);

6)

let peliculas = [
  { titulo: "Búsqueda Implacable", rating: 5, loHasVisto: true },
  { titulo: "Norbit", rating: 5, loHasVisto: false },
  { titulo: "Mini Espías", rating: 2, loHasVisto: true },
  { titulo: "La Vida es Bella", rating: 5, loHasVisto: false }
];

for (let i = 0; i < peliculas.length; i++) {
  let mensaje = "";

  if (peliculas[i].loHasVisto) {
    mensaje = `Viste "${peliculas[i].titulo}" - ${peliculas[i].rating} estrellas`;
  } else {
    mensaje = `No viste "${peliculas[i].titulo}" - ${peliculas[i].rating} estrellas`;
  }

  console.log(mensaje);
}

7)

let numeros = [2, 4, 5, 37, 0];
let numeros_duplicados = {};

for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i]; 
  numeros_duplicados[numero] = numero * 2; 
}

console.log(numeros_duplicados);

8)

let greeting = "Hello and welcome"; 
let words = greeting.split('');
let actoresVocales = [];
let actoresPrincipales = [
    "Tom Hanks", 
    "Johnny Depp", 
    "Elizabeth Taylor",
    "Morgan Freeman", 
    "Jennifer Aniston", 
    "Meryl Streep", 
    "Natalie Portman", 
    "Ashton Kutcher"   
];

let peliculas = [];
let actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves", //
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt"
};

for (let i = 0; i < actoresPrincipales.length; i++) {
    let nombre = actoresPrincipales[i];
    let primeraLetra = nombre.charAt(0).toLowerCase(); 

    if (['a', 'e', 'i', 'o', 'u'].includes(primeraLetra)) {
        actoresVocales.push(nombre); 
    }
}

for (let pelicula in actoresPrincipalesPorPelicula) {
    let actor = actoresPrincipalesPorPelicula[pelicula];
    if (!actoresPrincipales.includes(actor)) {
        actoresPrincipales.push(actor); 
    }
}

for (let pelicula in actoresPrincipalesPorPelicula) {
    peliculas.push(pelicula);
}

let peliculaPorActor = {};

for (let pelicula in actoresPrincipalesPorPelicula) {
    let actor = actoresPrincipalesPorPelicula[pelicula];
    if (!peliculaPorActor[actor]) {
        peliculaPorActor[actor] = [];
    }
    peliculaPorActor[actor].push(pelicula); 
}


console.log("Actores que comienzan con vocales:", actoresVocales);
console.log("Actores principales:", actoresPrincipales);
console.log("Películas:", peliculas);
console.log("Película por actor:", peliculaPorActor);

9)
let ecommerce = [
    { nombre: "Samsung TV", precio: 6000, articulos: 10 },
    { nombre: "DEL notebook", precio: 4000, articulos: 30 },
    { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
    { nombre: "Monitor Philips", precio: 12000, articulos: 20 },
    { nombre: "Teclado Logitech", precio: 3000, articulos: 5 }
];

function calcularValorTotal(productos) {
    let resultados = []; 

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        let valorTotal = producto.precio * producto.articulos;

        let resultado = {
            nombre: producto.nombre,
            valorTotal: valorTotal
        };

        resultados.push(resultado);
    }

    return resultados;
}

let totalArticulos = calcularValorTotal(ecommerce);

console.log(totalArticulos);

*/
