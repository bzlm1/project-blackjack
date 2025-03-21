import { divCartasJugadores } from '../state.js';
/**
 *
 * @param {String} carta
 * @param {Number} turno
 */
export const crearCarta = (carta, turno) => {
  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  divCartasJugadores[turno].append(imgCarta);
}