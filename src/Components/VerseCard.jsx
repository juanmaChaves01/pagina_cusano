import { useEffect, useState } from "react";
import {
  cargarVersiculos,
  versiculoAleatorio
} from "../scripts/versiculos";

export default function VerseCard() {
  const [versiculo, setVersiculo] = useState(null);

  useEffect(() => {
    async function iniciar() {
      await cargarVersiculos();
      setVersiculo(versiculoAleatorio());
    }

    iniciar();
  }, []);

  if (!versiculo) {
    return (
      <div className="flex justify-center items-center">
        <p>Cargando versículo...</p>
      </div>
    );
  }

  return (
    <div
      id="versiculos"
      className="flex items-center justify-center min-h-screen p-6"
    >
      <div className="max-w-2xl w-full rounded-2xl bg-black/4 backdrop-blur-md border border-white/20 shadow-2xl p-8">

        <h3 className="text-lg font-semibold text-black text-accent mb-4 text-center">
          {versiculo.referencia}
        </h3>

        <p className="text-xl leading-relaxed text-center italic">
          "{versiculo.texto}"
        </p>

        <button
          onClick={() => setVersiculo(versiculoAleatorio())}
          className="mt-6 px-5 py-2 rounded-lg bg-accent hover:bg-accent/80 text-black font-semibold transition block mx-auto cursor-pointer"
        >
          Otro versículo
        </button>

      </div>
    </div>
  );
}