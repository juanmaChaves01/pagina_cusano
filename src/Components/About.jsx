import fotoPerfil from "../assets/perfil.webp";

export default function About() {
  return (
    <section
      id="sobre"
      className="flex min-h-screen items-center justify-center px-6 py-10 "
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row">
        <img
          src={fotoPerfil}
          alt="Foto de perfil"
          className="h-64 w-64 rounded-full object-cover shadow-lg"
        />

        <div className="max-w-xl text-center md:text-left ">
          <h2 className="mb-4 text-4xl font-bold  text-accent">Sobre mí</h2>

          <p className="mb-4 text-lg text-justify">
            Desde hace varios años he dedicado mi vida a compartir el mensaje 
            del evangelio y a servir a quienes desean conocer más de Dios. Creo
             firmemente que la Biblia contiene principios capaces de transformar
             vidas y brindar esperanza en cualquier circunstancia.
          </p>

          <p className="mb-4 text-lg text-justify">
            Este sitio nace con el deseo de poner a disposición sermones, reflexiones 
            y recursos que puedan edificar a creyentes y también a quienes están dando 
            sus primeros pasos en la fe. Oro para que cada contenido sea una fuente de 
            ánimo, sabiduría y esperanza para todos los que lo visiten.
          </p>
        </div>
      </div>
    </section>
  );
}