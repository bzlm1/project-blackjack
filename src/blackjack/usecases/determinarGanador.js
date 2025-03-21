export const determinarGanador = (puntosMinimos, puntosComputadora) => {
  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('¡Es un empate!')
    } else if (puntosMinimos > 21 || puntosComputadora === 21) {
      alert('¡Computadora gana!')
      // console.log('arnold',puntosMinimos,puntosComputadora)
    } else if (puntosComputadora > 21 || puntosMinimos === 21) {
      // console.log('gerald',puntosMinimos,puntosComputadora)
      alert('¡Jugador gana!')
    } else {
      // console.log('nadie',puntosMinimos,puntosComputadora)
      alert('¡Computadora gana!')
    }

  }, 1250);

}