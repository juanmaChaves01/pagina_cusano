let versiculos = [];

export async function cargarVersiculos() {
  const respuesta = await fetch("/versiculos3.json");
  versiculos = await respuesta.json();
}

export function versiculoAleatorio() {
  if (versiculos.length === 0) {
    return null;
  }

  const indice = Math.floor(Math.random() * versiculos.length);

  return versiculos[indice];
}