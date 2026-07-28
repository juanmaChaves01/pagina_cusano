export default function SocialButton({ nombre, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-42 h-12 items-center justify-center rounded-lg bg-accent text-sm font-semibold text-black transition hover:scale-110 hover:bg-accent/80"
    >
      {nombre}
    </a>
  );
}