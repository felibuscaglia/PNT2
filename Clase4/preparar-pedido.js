const prepararEnsalada = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🥗 Ensalada lista");
      resolve();
    }, 4000);
  });
};

const prepararHamburguesa = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🍔 Hamburguesa lista");
      resolve();
    }, 8000);
  });
};

const prepararBebida = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🍹 Bebida lista");
      resolve();
    }, 2000);
  });
};

const prepararPedido = () => {
  Promise.all([prepararHamburguesa(), prepararBebida(), prepararEnsalada()])
    .then(() => console.log("Pedido listo!"))
    .catch((err) =>
      console.error("Hubo un error en la preparación del pedido: " + err)
    );
};

prepararPedido();
