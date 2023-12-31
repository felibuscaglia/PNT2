const personajesSimpsons = require("./personajes");

const MIN_EDAD = 18;

// Filtrar personajes menores de edad
const personajesMenoresDeEdad = personajesSimpsons.filter(
  (personaje) => personaje.edad < MIN_EDAD
);

module.exports = personajesMenoresDeEdad;
