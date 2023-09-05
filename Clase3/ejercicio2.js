const personajesSimpsons = require("./personajes");

// Sumar edades de los personajes
const edadTotal = personajesSimpsons.reduce(
  (accEdad, currPersonaje) => accEdad + currPersonaje.edad,
  0
);

console.log({ edadTotal });
