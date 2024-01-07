let usuarios = []

let usuariosLocales = localStorage.getItem("usuarios")

if (usuariosLocales != null) {
    usuarios = JSON.parse(usuariosLocales)
}

botonIngresar.addEventListener('click', (e)=>{
    e.preventDefault()

    let emailFormulario = document.getElementById('email').value
    let contraseñaFormulario = document.getElementById('contraseña').value

    let usuario = usuarios.find(user => user.email == emailFormulario && user.contraseña == contraseñaFormulario);

    if (usuario) {
        localStorage.setItem('inicioSesion', true);
        
        Swal.fire({
        icon: 'success',
        title: "Sesion iniciada!",
        html: "Volveremos a la página de inicio en algunos segundos.",
        timer: 2000,
        timerProgressBar: true,
    }).then((result) => {
        window.location.href = '../index.html';
    });

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Datos ingresados incorrectamente!',
            text: `Reingrese su información.`,
            showConfirmButton: false,
            timer: 2000 // Duración en milisegundos
        })
    }

})

botonCerrarSesion.addEventListener('click', (e)=>{
    e.preventDefault()

    localStorage.setItem('inicioSesion', false);

    Swal.fire({
        icon: 'success',
        title: 'Sesion cerrada correctamente!',
        showConfirmButton: false,
        timer: 2000 // Duración en milisegundos
    })

})
let alturaRio = localStorage.getItem('alturaRio') || 0;

// Puedes utilizar 'alturaRio' en toda la barra de navegación o en cualquier lugar necesario.
// Por ejemplo, puedes asignarlo a un elemento en el DOM.
document.getElementById("alturaRioNavBar").innerText = `Altura del Río: ${alturaRio}`;



