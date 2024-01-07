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
} else {
var fechaActual = new Date();

// Restar 3 horas a la fecha y hora actual
fechaActual.setHours(fechaActual.getHours() - 3);

// Obtén la referencia al elemento formFecha
let form = document.getElementById('formFecha');

// Agrega la clase "form-group" al elemento formFecha
form.classList.add("form-group");

// Crea un elemento input
let input = document.createElement('input');

// Establece el tipo del input como "datetime-local"
input.type = 'datetime-local';

// Formatea la fecha y hora para asignarla al valor del input
var fechaFormateada = fechaActual.toISOString().slice(0, 16); // Mantén la parte de la fecha y hora
input.value = fechaFormateada;

// Establece el paso del input a 3600 segundos (1 hora)
input.step = "3600";

// Agrega el input al formulario
form.appendChild(input);

// console.log(input.value)
let botonAceptar = document.getElementById('botonAceptar')
let personasHTML = document.getElementById('contenedorPersonas')


let personas = []
let despachos = []
let despachosLocales = localStorage.getItem("despachos")

if (despachosLocales != null) {
    despachos = JSON.parse(despachosLocales)}

botonAceptar.addEventListener('click', (e) =>{
    e.preventDefault()
    let despacho ={
    nombre: document.getElementById('nombre').value,
    matricula:document.getElementById('matricula').value,
    destino: document.getElementById('destino').value,
    documento: document.getElementById('documento').value,
    observaciones: document.getElementById('observaciones').value,
    personas: personas
    }

    despachos.push(despacho)

    console.log(despacho)

    localStorage.setItem('despachos', JSON.stringify(despachos))
    Swal.fire({
    icon: 'success',
    title: "Despacho realizado con exito!",
    html: "Volveremos a la página de iniciar sesion en algunos segundos.",
    timer: 2000,
    timerProgressBar: true,
})})


botonCancelar.addEventListener('click', (e) =>{
    e.preventDefault()
    window.location.href = window.location.href = '../index.html'
})

botonAgregar.addEventListener('click',(e) => {
    e.preventDefault()

    let persona = {
        nombre: document.getElementById('persona').value
    }
    personas.push(persona)

    let personaHTML = document.createElement('p')
    personaHTML.style="color:white"
    personaHTML.innerText= persona.nombre
    personasHTML.appendChild(personaHTML)

})

botonEliminar.addEventListener('click',(e) => {
    e.preventDefault()
    if (personas.length > 0) {
    personas.pop()
    personasHTML.removeChild(personasHTML.lastChild)}
})}
