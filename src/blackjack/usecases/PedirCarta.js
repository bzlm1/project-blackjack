import { deck } from "../state";

export const pedirCarta = () => (deck.length === 0) ? (console.error('No hay cartas en el deck'), null) : deck.pop();