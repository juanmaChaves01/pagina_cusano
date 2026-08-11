export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full backdrop-blur-md bg-primary py-8 text-center">
      <p className="px-20">© {year} DiegoCusano. All Rights Reserved.</p>
    </footer>
  );
}