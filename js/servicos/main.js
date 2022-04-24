$("#cor1").click((event) => {
    event.preventDefault();
    controller.criaLista();
    console.log(controller.ListaDeNotas);
  })