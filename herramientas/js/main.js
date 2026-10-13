document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos los elementos del DOM usando los IDs
    const vistaLogin = document.getElementById('vista-login');
    const vistaRecuperacion = document.getElementById('vista-recuperacion');
    const btnOlvido = document.getElementById('btn-olvido-contra');
    const btnCancelar = document.getElementById('btn-cancelar');
    const pestañasSuperiores = document.querySelector('.tabs');

    // Evento: Clic en "¿Olvidaste tu contraseña?"
    if (btnOlvido) {
        btnOlvido.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que la página salte hacia arriba
            
            vistaLogin.style.display = 'none'; // Oculta el login
            pestañasSuperiores.style.display = 'none'; // Oculta las pestañas Inicio/Registro
            vistaRecuperacion.style.display = 'block'; // Muestra la recuperación
        });
    }

    // Evento: Clic en "Cancelar y volver al inicio"
    if (btnCancelar) {
        btnCancelar.addEventListener('click', function(event) {
            event.preventDefault();
            
            vistaRecuperacion.style.display = 'none'; // Oculta la recuperación
            vistaLogin.style.display = 'block'; // Vuelve a mostrar el login
            pestañasSuperiores.style.display = 'flex'; // Vuelve a mostrar las pestañas
        });
    }
});