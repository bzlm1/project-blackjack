import { crearDeck } from "./crear-deck.js";
import { deck, tipos, especiales, puntosJugadores, divCartasJugadores, puntosDom, btnDetener, btnPedir } from "../state.js";
/**
 *
 * @param {Array} deck
 * @param {*} puntosJugadores
 * @param {*} divCartasJugadores
 * @param {*} puntosDom
 * @param {*} btnDetener
 * @param {*} btnPedir
 * @param {*} numJugadores
 */
export const inicializarJuego = () => {
  let numJugadores = 2;
  // deck = crearDeck(deck, tipos, especiales);
  crearDeck(deck, tipos, especiales);
  console.log(deck);

  // puntosJugadores = [];
  puntosJugadores.length = 0;
  console.log('numJugadores', numJugadores);

  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }
  console.log(puntosJugadores.length);

  divCartasJugadores.forEach(e => e.innerHTML = "");
  puntosDom.forEach(e => e.innerText = 0);
  btnDetener.disabled = false;
  btnPedir.disabled = false;
  // return {
  //   deck,
  //   puntosJugadores,
  //   divCartasJugadores,
  //   puntosDom,
  //   // btnDetener,
  //   // btnPedir
  // }
}