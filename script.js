const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');
let fontSize = 16; // Tamaño inicial del botón "Sí"

noBtn.addEventListener('click', () => {
    // Aumentar el tamaño del botón "Sí"
    fontSize += 10;
    siBtn.style.fontSize = `${fontSize}px`;

    // Cambiar el texto del botón "No"
    const textos = ["¿Segura?", "¿En serio?", "¡Piénsalo bien!", "¡No digas que no!", "¡Vamos!"]; // Lista de textos
    const randomIndex = Math.floor(Math.random() * textos.length);
    noBtn.textContent = textos[randomIndex];

    // Hacer que el botón "No" sea más pequeño o desaparezca
    noBtn.style.transform = `scale(${1 - (fontSize / 100)})`;
    if (fontSize > 100) {
        noBtn.style.display = 'none'; // Ocultar el botón "No" cuando el botón "Sí" sea muy grande

        // Hacer que el botón "Sí" ocupe toda la pantalla
        siBtn.style.position = 'fixed';
        siBtn.style.top = '0';
        siBtn.style.left = '0';
        siBtn.style.width = '100%';
        siBtn.style.height = '100%';
        siBtn.style.borderRadius = '0'; // Eliminar bordes redondeados
        siBtn.style.margin = '0'; // Eliminar márgenes
        siBtn.style.display = 'flex';
        siBtn.style.justifyContent = 'center';
        siBtn.style.alignItems = 'center';
        siBtn.style.fontSize = '40px'; // Tamaño de fuente más grande
    }
});

siBtn.addEventListener('click', () => {
    // Redireccionar a respuesta.html
    window.location.href = 'respuesta.html';
});