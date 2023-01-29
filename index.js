function laCajaDePandora(numero){
  return numero % 2 == 0 
    ? parseInt(numero).toString(2)
    : parseInt(numero).toString(16)
}