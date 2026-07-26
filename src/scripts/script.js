import { useEffect, useState } from "react";
import { cargarBiblia } from "./biblia.js";
import { versiculoAleatorio } from "./versiculos.js";

export default function VerseCard() {
  const [versiculo, setVersiculo] = useState(null);

  useEffect(() => {
    async function iniciar() {
      await cargarBiblia();
      setVersiculo(versiculoAleatorio());
    }

    iniciar();
  }, []);

  if (!versiculo) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h3>
        {versiculo.libro} {versiculo.capitulo}:{versiculo.versiculo}
      </h3>

      <p>{versiculo.texto}</p>
    </div>
  );
}