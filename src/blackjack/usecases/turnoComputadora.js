import { puntosJugadores } from "../state.js";
import { pedirCarta } from "./PedirCarta.js";
import { acumularPuntos } from "./acumularPuntos.js";
import { crearCarta } from "./crearCarta.js";
import { determinarGanador } from "./determinarGanador.js";
export const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();
    puntosJugadores[length - 1] = acumularPuntos(carta, puntosJugadores.length - 1);
    crearCarta(carta, puntosJugadores.length - 1);

  } while ((puntosJugadores[puntosJugadores.length - 1] < puntosMinimos) && puntosMinimos <= 21);
  console.log(puntosJugadores[puntosJugadores.length - 1])
  determinarGanador(puntosMinimos, puntosJugadores[puntosJugadores.length - 1]);
};