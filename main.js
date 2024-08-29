document.addEventListener('DOMContentLoaded', function() {
    // Manejo de clic en los enlaces del menú
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', (event) => {
            const href = event.target.getAttribute('href');
            if (href === 'productos.html') {
                event.preventDefault(); // Evita el comportamiento predeterminado del enlace
                window.location.href = 'productos.html'; // Redirige a productos.html
            } else if (href && href !== '#') {
                event.preventDefault(); // Evita el comportamiento predeterminado del enlace
                window.location.href = href; // Redirige a otras páginas
            }
        });
    });

    // Funcionalidad para el botón de tallas
    document.querySelectorAll('.size-btn').forEach(button => {
        button.addEventListener('click', () => {
            const sizeForm = button.nextElementSibling;
            sizeForm.style.display = sizeForm.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Validación del formulario de suscripción
    document.querySelector('form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.querySelector('input[type="email"]').value;
        if (emailInput === '') {
            alert('Por favor, ingresa tu correo electrónico.');
        } else {
            alert('Gracias por registrarte!');
        }
    });

    // Manejo de la aceptación de términos y condiciones
    document.querySelector('#terms')?.addEventListener('change', function() {
        if (this.checked) {
            alert('Has aceptado los términos y condiciones.');
        } else {
            alert('Debes aceptar los términos y condiciones para continuar.');
        }
    });
});
