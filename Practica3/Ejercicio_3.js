// Ejercicio c

function simularPeticionAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    // Usa await para esperar la promesa de simularPeticion
    const resultado = await simularPeticionAPI();
    // Imprime el resultado
    console.log(resultado);
}

// Usa la funcion async
obtenerDatos();