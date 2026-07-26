import { getVersiculos } from "./biblia.js";

export function versiculoAleatorio() {
    const versiculos = getVersiculos();
    const indice = Math.floor(Math.random() * versiculos.length);
    return versiculos[indice];
}