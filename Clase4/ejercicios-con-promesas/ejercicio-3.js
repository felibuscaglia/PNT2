// Crear un metodo que consuma una api ( https: //www.mockachino.com/ea96a512-f802-46/famosos ) de informacion de personas usando axios. Del objeto que nos devuelven tenemos que tomar lo
// siquiente la propiedad famosos.
// Tenemos que usar esa informacion para imprimir el promedio de edad y la suma de todas las
// edades de los famosos

const API_URL = "https://www.mockachino.com/ea96a512-f802-46/famosos";

const fetchFamosos = async () => {
  try {
    const res = await fetch(API_URL);
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

fetchFamosos()
  .then((famososDTO) => famososDTO.famosos)
  .then((famosos) => {
    const edadTotal = famosos.reduce((acc, curr) => acc + curr.edad, 0);
    const promedioEdad = edadTotal / famosos.length;
    console.log("Edad total de los famosos: " + edadTotal);
    console.log("Promedio de edad de los famosos: " + promedioEdad);
  });
