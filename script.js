// Función para el traductor Morse
function translateToMorse(text) {
    const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
        '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
        '9': '----.', '0': '-----', ' ': '/'
    };

    return text.toUpperCase().split('').map(char => morseCode[char] || '').join(' ');
}

// Mostrar la sección correspondiente
document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        
        // Ocultar todas las secciones
        document.querySelectorAll('main > section').forEach(section => {
            section.classList.add('hidden');
        });

        // Mostrar la sección seleccionada
        const targetSection = document.getElementById(targetId);
        targetSection.classList.remove('hidden');

        // Mostrar el contenido principal
        document.querySelector('main').classList.add('active');
    });
});

// Traducir Morse
document.querySelector('#traductor-morse .translate-btn').addEventListener('click', () => {
    const input = document.querySelector('#traductor-morse input[type="text"]');
    const result = translateToMorse(input.value);
    alert(`Texto en Morse: ${result}`);
});

// Traductor de idiomas (simulación)
document.querySelector('#traductor-idiomas .translate-btn').addEventListener('click', () => {
    const input = document.querySelector('#traductor-idiomas input[type="text"]');
    alert(`Funcionalidad de traducción no implementada. Texto ingresado: ${input.value}`);
});

// Descargar videos (simulación)
document.querySelector('#descargar-videos .download-btn').addEventListener('click', () => {
    const input = document.querySelector('#descargar-videos input[type="text"]');
    alert(`Funcionalidad de descarga no implementada para la URL: ${input.value}`);
});
