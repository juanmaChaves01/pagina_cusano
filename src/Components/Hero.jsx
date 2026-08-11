export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen">
      <div className="relative z-10 flex h-full flex-col items-center justify-center -translate-y-18 px-6">
        
        <div className="text-center">

          <h2 className="text-5xl font-bold md:text-7xl">
            Pastor{" "}
            <span className="bg-clip-text text-accent ">
              Diego Cusano
            </span>
          </h2>
        </div>

        <div className="mt-10 max-w-xl text-center">
          <p className="text-lg md:text-xl text-black ">
            Bienvenido a este espacio donde encontrarás reflexiones bíblicas, mensajes 
            inspiradores y recursos para fortalecer tu relación con Dios. Mi deseo es que
            cada enseñanza sea de bendición y te anime a caminar cada día 
            más cerca de Cristo.
          </p>
        </div>


        <a
          href="#versiculos"
          className="absolute bottom-10 text-3xl animate-bounce"
        >
          ↓
        </a>

      </div>
    </section>
  );
}