import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import IndexOption from "./IndexOption";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-[#333e54] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
      
        <a href="#inicio" className="flex items-center">
          <img
            src="/src/assets/react.svg"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </a>



        {/* Menú escritorio */}
        <ul className="hidden md:flex gap-6">
          <li><IndexOption section="inicio" >Inicio</IndexOption></li>
          <li><IndexOption section="sobre">Sobre mí</IndexOption></li>
          <li><IndexOption section="contacto">Contacto</IndexOption></li>
        </ul>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          <span className="text-base font-medium">Menú</span>
        </button>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden backdrop-blur-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><IndexOption section="inicio" >Inicio</IndexOption></li>
            <li><IndexOption section="versiculos" >Versículos</IndexOption></li>
            <li><IndexOption section="sobre" >Sobre mí</IndexOption></li>
            <li><IndexOption section="contacto" >Contacto</IndexOption></li>
          </ul>
        </div>
      )}
    </header>
  );
}



