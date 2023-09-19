const preparativoSeguroDeViaje = "seguro de viaje";
const preparativoTransporteConfirmado = "transporte confirmado";

const preparativos = [
  { requisito: "pasaportes al día", valor: true },
  { requisito: "reservas de hotel", valor: false },
  { requisito: preparativoTransporteConfirmado, valor: true },
  { requisito: preparativoSeguroDeViaje, valor: true },
  { requisito: "cambio de moneda", valor: false },
];

const obtenerPreparativosDesdeAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(preparativos);
    }, 3000);
  });
};

const listoParaViajar = async () => {
  try {
    const preparativos = await obtenerPreparativosDesdeAPI();
    const requisitosFaltantes = preparativos
      .filter((preparativo) => !preparativo.valor)
      .map((requisitoFaltante) => requisitoFaltante.requisito);

    if (requisitosFaltantes.length) {
      console.log(
        `No estás listo para viajar. Te falta ${requisitosFaltantes.join(
          ", "
        )}.`
      );
    } else {
      console.log("Tenés todo listo para viajar!");
    }
  } catch (err) {
    console.error(err);
  }
};

listoParaViajar()
  .then(() => {
    preparativos.push({ requisito: "vacunas necesarias", valor: true });

    return preparativos.findIndex(
      (preparativo) => preparativo.requisito === preparativoSeguroDeViaje
    );
  })
  .then((indiceSeguroDeViaje) => {
    preparativos.splice(indiceSeguroDeViaje, 1);

    return preparativos.find(
      (preparativo) => preparativo.requisito === preparativoTransporteConfirmado
    );
  })
  .then(
    (preparativoParaActualizar) => (preparativoParaActualizar.valor = false)
  )
  .then(() => listoParaViajar());
