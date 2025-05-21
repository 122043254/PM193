//Ejercicio 3

const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad:28 }
];

//Tu codigo aqui

const find = personas.find((persona) => persona.nombre == "Luis");
console.log(find.nombre);

const forEach = personas.forEach((persona) => console.log(persona.nombre));

const reduce = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log(reduce);