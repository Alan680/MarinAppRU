
let usuarios = []

let usuariosLocales = localStorage.getItem("usuarios")

if (usuariosLocales != null) {
    usuarios = JSON.parse(usuariosLocales)
}

botonRegistro.addEventListener('click', (e) => {
    e.preventDefault()
    let email = document.getElementById('email').value
    let contraseña = document.getElementById('contraseña').value

    let emailValido = correoValido(email)

    if (!emailValido || contraseña === '' || contraseña.length <9){
        Swal.fire({
            icon: 'error',
            title: 'Datos ingresados incorrectamente!',
            text: `Reingrese su información.`,
            showConfirmButton: false,
            timer: 2000 // Duración en milisegundos
        })
    } else {

        let usuario = {
            email:email,
            contraseña:contraseña
        }

        usuarios.push(usuario)
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        Swal.fire({
        icon: 'success',
        title: "Cuenta creada!",
        html: "Volveremos a la página de iniciar sesion en algunos segundos.",
        timer: 2000,
        timerProgressBar: true,
    }).then((result) => {
        window.location.href = './iniciarSesion.html';
    });
    }
    
})


function correoValido(correo) {
    // un shoutout para mi profe de sintaxis andresito pascal
    // caracteres menos espacio y @ -> @ -> caracteres menos espacio y @ -> . -> caracteres menos espacio y @ 
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(correo);}

    let alturaRio = localStorage.getItem('alturaRio') || 0;

    // Puedes utilizar 'alturaRio' en toda la barra de navegación o en cualquier lugar necesario.
    // Por ejemplo, puedes asignarlo a un elemento en el DOM.
    document.getElementById("alturaRioNavBar").innerText = `Altura del Río: ${alturaRio}`;