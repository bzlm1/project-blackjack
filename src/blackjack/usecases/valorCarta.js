export const valorCarta = (carta) => {
  // console.log('valorCARTA', carta);
  // console.log(puntosJugadores);

  const valor = carta.substring(0, carta.length - 1);
  // const valor2 = carta.slice(0, -1);
  return (isNaN(valor)) ?
    (valor === 'A') ? 11 : 10
    : valor * 1;
}