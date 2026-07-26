let biblia = null;
let versiculos = [];

export async function cargarBiblia() {
    const respuesta = await fetch("/biblia.json");
    biblia = await respuesta.json();

    biblia.books.forEach(libro => {
        libro.chapters.forEach((capitulo, i) => {
            capitulo.items.forEach(item => {
                if (item.type === "verse") {
                const texto = item.lines.join(" ");

                if (texto.length > 35) {
                    versiculos.push({
                        libro: libro.name,
                        codigo: libro.book_usfm,
                        capitulo: i + 1,
                        versiculo: item.verse_numbers[0],
                        texto
                    });
                }
            }
            });
        });
    });
}

export function getBiblia() {
    return biblia;
}

export function getVersiculos() {
    return versiculos;
}