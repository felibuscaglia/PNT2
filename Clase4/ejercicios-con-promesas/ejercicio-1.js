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

const archivos = [archivo1, archivo2, archivo3];

const modosDescarga = {
  SIMULTANEO: "simultaneo",
  SECUENCIAL: "secuencial",
};

const descargaSecuencial = async (archivos) => {
  try {
    for (const archivo of archivos) {
      await descargarArchivo(archivo);
    }

    console.log("Finalizó la descarga secuencial de archivos.");
  } catch (err) {
    console.error("Error descarga secuencial: " + err);
  }
};

const descargaEnSimultaneo = (archivos) => {
  const promesasDeDescarga = archivos.map((archivo) =>
    descargarArchivo(archivo)
  );

  Promise.all(promesasDeDescarga)
    .then(() =>
      console.log("Todas las descargas fueron realizadas en simultaneo.")
    )
    .catch((err) => console.error("Error descarga en simultaneo: " + err));
};

const descargarArchivos = (modoDescarga) => {
  if (modoDescarga === modosDescarga.SIMULTANEO) {
    descargaEnSimultaneo(archivos);
  } else if (modoDescarga === modosDescarga.SECUENCIAL) {
    descargaSecuencial(archivos);
  } else {
    console.log("Modo de descarga no reconocido");
  }
};

descargarArchivos(modosDescarga.SECUENCIAL);
