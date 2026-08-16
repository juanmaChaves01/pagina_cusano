import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import IndexOption from "./IndexOption";
import SocialLinks from "./SocialLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-primary">
      <div className="p-4">
        <SocialLinks />
      </div>
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-5">
      
        <a href="#inicio" className="flex items-center">
          <img
            src="/heart.svg"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </a>



        {/* Menú escritorio */}
        <ul className="hidden md:flex gap-6">
          <li><IndexOption section="inicio" >Inicio</IndexOption></li>
          <li><IndexOption section="versiculos" >Versículos</IndexOption></li>
          <li><IndexOption section="sobre">Sobre mí</IndexOption></li>
          <li><IndexOption section="contacto">Contacto</IndexOption></li>
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
          <span className="text-base font-medium">Menú</span>
        </button>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden backdrop-blur-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><IndexOption section="inicio"  onClick={closeMenu}>Inicio</IndexOption></li>
            <li><IndexOption section="versiculos"  onClick={closeMenu}>Versículos</IndexOption></li>
            <li><IndexOption section="sobre"  onClick={closeMenu}>Sobre mí</IndexOption></li>
            <li><IndexOption section="contacto"  onClick={closeMenu}>Contacto</IndexOption></li>
          </ul>
        </div>
      )}
    </header>
  );
}



