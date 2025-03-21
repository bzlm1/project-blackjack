import _ from 'underscore';
import { deck, tipos as tiposDeCarta, especiales as tiposEspeciales } from "../state.js";


/**
 *
 * @param {Array<string>} deck
 * @param {Array<string>} tiposDeCarta - Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales - Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} - retorna un deck de cartas
 */
export const crearDeck = () => {

  if (!tiposDeCarta || tiposDeCarta === 0) throw new Error("TipoDeCarta es obligatorio como un arreglo de string");
  if (!tiposEspeciales || tiposEspeciales === 0) throw new Error("TiposEspeciales es obligatorio como un arreglo de string");

  // deck = [];
  deck.length = 0;
  let convinado = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      convinado.push(i + tipo);
    }
  }
  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      convinado.push(esp + tipo);
    }
  }

  deck.push(..._.shuffle(convinado));
  // return deck = _.shuffle(deck);
  // console.log(convinado);
  // console.log(deck);

};