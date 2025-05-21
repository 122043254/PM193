//Ejercicio 2

const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
];

// Tu codigo aqui

const filtrado = productos.filter((producto) => producto.precio > 1000);
const map = filtrado.map((producto) => producto.nombre);

console.log(map); // ["Laptop", "Monitor"]