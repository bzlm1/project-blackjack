import { puntosJugadores, puntosDom } from "../state.js";
import { valorCarta } from "./valorCarta.js";

export const acumularPuntos = (carta, turno) => {
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  puntosDom[turno].innerText = puntosJugadores[turno];

  return puntosJugadores[turno];
}