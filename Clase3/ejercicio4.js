const personajesMenoresDeEdad = require("./ejercicio1");

const NUEVO_ROL = "Estudiante";

// Cambiar el rol de los personajes

const estudiantes = personajesMenoresDeEdad.map(({ rol, ...dataPersonaje }) => {
  return {
    ...dataPersonaje,
    rol: NUEVO_ROL,
  };
});

console.log({ estudiantes });