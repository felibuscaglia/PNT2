const personajes = require("./personajes");

const nuevosPersonajes = [
  { nombre: "Jacqueline Bouvier", edad: 45, rol: "Padre" },
  { nombre: "Rainier Wolfcastle", edad: 36, rol: "Madre" },
  { nombre: "Comic Book Guy", edad: 10, rol: "Hijo" },
];

const personajesCombinados = [...personajes, ...nuevosPersonajes];

console.log({ personajesCombinados });