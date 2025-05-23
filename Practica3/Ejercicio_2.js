// Ejercicio b

function verificarUsuario(usuario) {
    // Retorna una promesa aqui
    return new Promise((resolve, reject) => {
        // Simula una verificación de usuario
        setTimeout(() => {
            if (usuario === "admin") {
                resolve("Acceso concedido");
            } else {
                reject("Acceso denegado");
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Usa .then() y .catch() para manejar el resultado
verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err)); // Acceso concedido

verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.error(err)); // Acceso denegado