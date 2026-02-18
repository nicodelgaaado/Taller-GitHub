// Función para cambiar el tema (modo oscuro/claro)
function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById('theme-toggle');
    
    // Alternar la clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Cambiar a Modo Claro';
    } else {
        themeButton.textContent = 'Cambiar a Modo Oscuro';
    }
}

function toggleInfo() {
    const extraInfo = document.getElementById('extra-info');
    const toggleButton = document.getElementById('info-toggle');
    
    // Alternar la visibilidad de la sección extra
    if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
        extraInfo.style.display = 'block';
        toggleButton.textContent = 'Ocultar Más Información';
    } else {
        extraInfo.style.display = 'none';
        toggleButton.textContent = 'Mostrar Más Información';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Botón para cambiar tema
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
    
    // Botón para mostrar/ocultar info
    const infoButton = document.getElementById('info-toggle');
    if (infoButton) {
        infoButton.addEventListener('click', toggleInfo);
    }
});