let alturaRio = localStorage.getItem('alturaRio') || 0;

// Puedes utilizar 'alturaRio' en toda la barra de navegación o en cualquier lugar necesario.
// Por ejemplo, puedes asignarlo a un elemento en el DOM.
document.getElementById("alturaRioNavBar").innerText = `Altura del Río: ${alturaRio}`;