import SocialButton from "./SocialButton";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-2xl text-center">
        <h2 className="mb-4 text-4xl font-bold">
          Contacto
        </h2>

        <p className="mb-8">
          ¿Tienes alguna consulta o propuesta? Escríbeme.
        </p>

        <div className="space-y-4">
          <SocialButton
            nombre="Instagram"
            link="https://instagram.com/diego.cusano8"
          />
          <br />
          <SocialButton
            nombre="Whatsapp"
            link="https://wa.me/"
          />
          <br />
          <SocialButton
            nombre="TikTok"
            link="https://tiktok.com/@diego.cusano8"
          />
        </div>   
      </div>
    </section>
  );
}