export let deck = [],
  puntosJugadores = [];
export const tipos = ['C', 'D', 'H', 'S'],
  especiales = ['A', 'J', 'Q', 'K'];

// Referencias del HTML
export const btnPedir = document.querySelector('#btnPedir'),
  btnDetener = document.querySelector('#btnDetener'),
  btnNuevo = document.querySelector('#btnNuevo'),
  divCartasJugadores = document.querySelectorAll('.divCartas'),
  puntosDom = document.querySelectorAll("small");