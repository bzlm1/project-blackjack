// import { shuffle } from 'underscore';
import _ from 'underscore';
const miModulo = (() => {
  'use strict'
  let deck = [],
    puntosJugadores = [];
  const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

  // Referencias del HTML
  const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo'),
    divCartasJugadores = document.querySelectorAll('.divCartas'),
    puntosDom = document.querySelectorAll("small");

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    divCartasJugadores.forEach(e => e.innerHTML = "");
    puntosDom.forEach(e => e.innerText = 0);
    btnDetener.disabled = false;
    btnPedir.disabled = false;
  }

  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }
    for (let tipo of tipos) {
      for (let esp of especiales) {
        deck.push(esp + tipo);
      }
    }
    return deck = _.shuffle(deck);
  };

  const pedirCarta = () => (deck.length === 0) ? (console.error('No hay cartas en el deck'), null) : deck.pop();

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    // const valor2 = carta.slice(0, -1);
    return (isNaN(valor)) ?
      (valor === 'A') ? 11 : 10
      : valor * 1;
  }

  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosDom[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
  }
  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
  }

  const determinarGanador = (puntosMinimos, puntosComputadora) => {
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
  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarta();
      puntosJugadores[length - 1] = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);

    } while ((puntosJugadores[puntosJugadores.length - 1] < puntosMinimos) && puntosMinimos <= 21);
    console.log(puntosJugadores[puntosJugadores.length - 1])
    determinarGanador(puntosMinimos, puntosJugadores[puntosJugadores.length - 1]);
  };
  // Eventos
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador === 21 || puntosJugador > 21) {
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(puntosJugador)
    }

  });
  btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0])
  });
  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
  });
  // return {
  //   nuevoJuego: inicializarJuego
  // };

})()
