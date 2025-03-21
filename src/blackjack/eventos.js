import { inicializarJuego } from "./usecases/inicializarJuego.js";
import { deck, tipos, especiales, puntosJugadores, divCartasJugadores, puntosDom, btnDetener, btnPedir } from "./state.js";
import { pedirCarta } from "./usecases/PedirCarta.js";
import { acumularPuntos } from "./usecases/acumularPuntos.js";
import { crearCarta } from "./usecases/crearCarta.js";
import { turnoComputadora } from "./usecases/turnoComputadora.js";

export function funBtnPedir() {
  btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    console.log('evento pedir', carta);

    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador === 21 || puntosJugador > 21) {
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(puntosJugador)
    }

  });
};
export function funBtnDetener() {
  btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0])
  });
};
export function funBtnNuevo() {
  btnNuevo.addEventListener('click', () => {
    inicializarJuego(deck, tipos, especiales, puntosJugadores, divCartasJugadores, puntosDom, btnDetener, btnPedir);
  });
};
