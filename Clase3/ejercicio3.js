const personajesSimpsons = require("./personajes");

// Obtener los nombres de los personajes

const nombres = personajesSimpsons.map(personaje => personaje.nombre);

console.log({ nombres });