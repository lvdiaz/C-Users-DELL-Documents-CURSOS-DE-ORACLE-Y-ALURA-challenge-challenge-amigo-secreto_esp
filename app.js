// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Elimina espacios en blanco al inicio y final

    // Validar que el nombre no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.'); // Mensaje solo si el campo está vacío
        return; // Detener la función si el nombre está vacío
    }

    // Validar que el nombre no esté repetido (sin importar mayúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert('El nombre ya está en la lista. Por favor, ingresa un nombre diferente.');
        return; // Detener la función si el nombre está repetido
    }

    // Si el nombre es válido, agregarlo al array
    amigos.push(nombre);

    // Actualizar la lista en el DOM
    actualizarListaAmigos();

    // Limpiar el campo de texto
    input.value = '';
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para realizar el sorteo.');
        return;
    }

    // Elegir un amigo secreto aleatoriamente
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado en el DOM
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}