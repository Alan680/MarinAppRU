let alturaRio = localStorage.getItem('alturaRio') || 0;

// Puedes utilizar 'alturaRio' en toda la barra de navegación o en cualquier lugar necesario.
// Por ejemplo, puedes asignarlo a un elemento en el DOM.
document.getElementById("alturaRioNavBar").innerText = `Altura del Río: ${alturaRio}`;

let sesionIniciada = localStorage.getItem("inicioSesion");

if (sesionIniciada === 'false'){
    Swal.fire({
        icon: 'error',
        title: "Sesion no iniciada!",
        html: "Volveremos a la página de inicio de sesion en algunos segundos.",
        timer: 2000,
        timerProgressBar: true,
    }).then((result) => {
        window.location.href = './iniciarSesion.html';
    });
}