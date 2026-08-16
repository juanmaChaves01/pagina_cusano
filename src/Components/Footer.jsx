import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full backdrop-blur-md bg-primary py-8 text-center">
      <div className="p-4">
        <SocialLinks />
      </div>
      <p className="px-20">© {year} DiegoCusano. All Rights Reserved.</p>
    </footer>
  );
}