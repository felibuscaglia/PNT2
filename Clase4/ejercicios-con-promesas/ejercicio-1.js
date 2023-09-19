const descargarArchivo = (nombreArchivo) => {
  const tiempoDeDescarga = Math.floor(Math.random() * 5) + 1;

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        nombreArchivo +
          ` descargado correctamente en ${tiempoDeDescarga} segundos.`
      );
      resolve();
    }, tiempoDeDescarga * 1000);
  });
};

const archivo1 = "Archivo 1";
const archivo2 = "Archivo 2";
const archivo3 = "Archivo 3";

descargarArchivo(archivo1)
  .then(() => descargarArchivo(archivo2))
  .then(() => descargarArchivo(archivo3));
