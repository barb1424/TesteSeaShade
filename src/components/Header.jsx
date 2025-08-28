import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { LuHouse } from "react-icons/lu";
import { FaQuestion } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-linear-to-r from-azul-700 to-sky-600 text-white py-5 relative z-20">
      {/* Container interno para o conteúdo, com padding e centralização */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="SeaShade Logo" className="max-w-24 md:max-w-36 sm:max-w-35 object-cover" />
        </Link>

        {/* Menu de navegação para desktop */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-14 text-slate-50">
            <li><Link to="/" className="line">Início</Link></li>
            <li><Link to="/sobre" className="line">Sobre</Link></li>
            <li><Link to="/planos" className="line">Planos</Link></li>
            <li><Link to="/contato" className="line">Contato</Link></li>
          </ul>
        </nav>

        {/* Botão "Entrar" para desktop */}
        <Link
          to="/login"
          className="hidden md:block border px-4 py-1.5 transition-colors duration-300 hover:bg-slate-50 hover:text-black hover:border-slate-50">
          Entrar
        </Link>
      </div>

      {/* Botão de abrir Menu Hamburguer para Mobile */}
      <FiMenu
        onClick={() => setIsMenuOpen(true)}
        className={`text-slate-50 md:hidden cursor-pointer absolute right-4 top-1/2 -translate-y-1/2`}
        size="45"
      />

      {/* Menu Hamburguer (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-linear-to-r from-azul-700 to-sky-600 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-5 px-10">
          <img src={logo} alt="SeaShade Logo" className="max-w-24 object-cover" />
          <IoClose onClick={() => setIsMenuOpen(false)} className="text-slate-50 cursor-pointer" size="30" />
        </div>
        <ul className="pt-7 px-8 flex flex-col gap-9 text-xl">
          <li>
            <Link to="/" className="border-b flex items-center border-azul-300 pb-2.5" onClick={() => setIsMenuOpen(false)}>
              <div className="flex hover:text-slate-300 transition-color duration-300">
              <div className="flex justify-center items-center w-8"><LuHouse size={17} /></div>
              Início</div>
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="border-b flex items-center border-azul-300 pb-2.5" onClick={() => setIsMenuOpen(false)}>
             <div className="flex hover:text-slate-300 transition-color duration-300">
              <div className="flex justify-center items-center w-8"><FaQuestion size={16} /></div>
              Sobre</div>
            </Link>
          </li>
          <li>
            <Link to="/planos" className="border-b flex items-center border-azul-300 pb-2.5" onClick={() => setIsMenuOpen(false)}>
             <div className="flex hover:text-slate-300 transition-color duration-300">
              <div className="flex justify-center items-center w-8"><FiPackage size={17} /></div>
              Planos</div>
            </Link>
          </li>
          <li>
            <Link to="/contato" className="border-b flex items-center border-azul-300 pb-2.5" onClick={() => setIsMenuOpen(false)}>
              <div className="flex hover:text-slate-300 transition-color duration-300">
              <div className="flex justify-center items-center w-8"><FaRegEnvelopeOpen size={14} /></div>
              Contato</div>
            </Link>
          </li>
          <li>
            <Link to="/login" className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-sm font-medium justify-center flex items-center gap-2 p-4" onClick={() => setIsMenuOpen(false)}>
              <div className="flex justify-center items-center w-8"><FaRegUserCircle /></div>
              Entrar / Cadastrar-se
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;