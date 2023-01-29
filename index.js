function laCajaDePandora(numero){
  return numero % 2 == 0 
    ? parseInt(numero).toString(2)
    : parseInt(numero).toString(16)
}

function omar() {
  return({
    nombre: "Omar",
    edad: 34,
    nacionalidad: "Colombiano",
  })
}

function walter() {
  return {
    nombre: 'walter',
    edad: 44,
    nacionalidad: 'argentino'
  }
}