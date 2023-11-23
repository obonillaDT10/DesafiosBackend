// const mostrarLista = (arr) => {
//     if(arr.legth == 0) return "Lista vacía";

//     arr.map((elementos) => {
//     console.log(elementos);
//     });

//     return `El array tiene ${arr.legth} elementos`;
// };

// //casos de prueba
// console.log(mostrarLista([]));
// console.log(mostrarLista([1]));
// console.log(mostrarLista([23, 23, 32, 32, "Nombre", true]));



//EJERCICIO CLASE 0

// const Personas  =

// [
//     {nombre: "Omar", edad: 36, precio: 1500, series: [{serie: "Ted Lasso"}], películas: "Terminator"}
// ]

// console.log(Personas);

// console.log (Personas)



//CLASE 1 - CONSIGNA: AGREGAR METODOS GetProducts - AddProducts - GetProductsById


// const numeros = [2, 3, 4, 5, 6];
// console.log(numeros);

//includes
// const nombres = ["Matias", "Omar", "Mayra", "Cintia"];

// const nombre = "pedro";

// if (nombres.includes(nombre)) {
//     console.log(`${nombre} está presente`);
// } else {
//     console.log(`${nombre} no está disponible`);
// }

// const objetos = [
//     {
//         manzanas:3,
//         peras:2,
//         carne:1,
//         jugos:5,
//         dulces:2
//     },
//     {
//         manzanas:1,
//         sandias:1,
//         huevos:6,
//         jugos:1,
//         panes:4
//     }
// ]
// console.log(objetos);

//lista nueva con todos los tipos de productos sin cantidades. Utilizar Object.keys - Array.includes

// const productos = [];

// objetos.forEach(objeto => {
//     const keys = Object.keys(objeto);

//     keys.forEach(key => {
//         if (!productos.includes(key)) {
//             productos.push(key);
//         }
//     });
// });


// console.log(productos);

// let totalVendidos = 0;
// objetos.forEach(objeto => {
//     let keyValues = Object.entries(objeto);

//     keyValues.forEach((prod) => {
//         totalVendidos += prod[1];
//     });
// });

// console.log(totalVendidos);


// const fs = require("fs")
// const crypto = require("crypto");

// class UserManager {

//     constructor(path) {
//         try {
//             this.path = path;
//             let users = fs.readFileSync(path, "utf-8");

//         }
//     }
// }



//EJERCICIO DE FECHA DE NACIMIENTO

// const moment = require("moment");

// let fechaActual = moment();
// let fechaNacimiento = moment("1986-12-21");

// if (fechaNacimiento.isValid()) {
//   console.log("Es valido");
//   let dias = fechaActual.diff(fechaNacimiento, "days");
//   console.log(dias);
// }

// console.log(fechaNacimiento);


//EJERCICIO DE CREACION DE SERVIDOR

//const http = require("http");

//const server = http.createServer((http.request, response)) => {
//    console.log
//}

//orden para iniciar un proyecto:
//npm start
//npm i express
//crear la carpeta src
//dentro de src crear el archivo principal (index, server, etc)
//en el archivo toca llamar express:  const express = require('express');
//const app = express();

//luego definir una ruta: app.listen(8080), () => console.log("Server is listening, por 8080");
//en el package.json bajo "scripts" hay que agregar "dev": "nodemon src/server.js"
//probar si el servidor esta funcionando en el navegador: localhost:8080
//app.get("/", (request, response) => {
    //response.send("<h1> Hola mundo desde express </h1>")
//})


