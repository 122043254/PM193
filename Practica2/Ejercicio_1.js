//Ejercicio 1

const persona = {
    nombre: "Ivan Isay", 
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

// Aplica destructuración aqui

const {nombre} = persona;
const {edad} = persona;
const {direccion: {ciudad, pais}} = persona;

console.log("Me llamo " + nombre + " y tengo " + edad + " años", "y vivo en " + ciudad);