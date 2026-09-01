
// Obtenemos el botón por el id
const botonInicioSesion = document.getElementById('btn-inicio-sesion')

// Asignar el evento click al botón
botonInicioSesion.addEventListener('click', function() {
    // Obtenemos el input del correo
    const inputEmail = document.getElementById('input-email')
    // Obtenemos el input de la contraseña
    const inputPassword = document.getElementById('input-password')

    // Aquí se supone que tenemos validar el correo y la contraseña

    // Obtenemos el correo (el valor del input de correo)
    const email = inputEmail.value

    if (email === 'admin@tienda.cl') {
        // Lo redirigimos a admin/index.html
        window.location = 'admin/index.html'
        // Asignar el rol del usuario en localStorage
        localStorage.setItem('rol_usuario', 'admin')
    } else if (email === 'vendedor@tienda.cl') {
        // Lo redirigimos a admin/vendedor.html
        window.location = 'admin/vendedor.html'
        // Asignar el rol del usuario en localStorage
        localStorage.setItem('rol_usuario', 'vendedor')
    } else {
        alert("Credenciales incorrectas")
    }
})