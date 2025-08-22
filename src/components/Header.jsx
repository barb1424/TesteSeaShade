
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" text-white py-6 px-6 md:px-32">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/">
          <img src={logo} alt="SeaShade Logo" className="h-12 w-auto" />
        </Link>
        <nav className="hidden xl:flex items-center space-x-12">
          <Link to="/" className="p-3 font-semibold text-base">Início</Link>
          <Link to="/sobre" className="p-3 font-semibold text-base">Sobre</Link>
          <Link to="/planos" className="p-3 font-semibold text-base">Planos</Link>
          <Link to="/contato" className="p-3 font-semibold text-base">Contato</Link>
        </nav>
        <div className="hidden xl:flex items-center">
          <Link to="/login">
            <button className="border-2 border-white hover:bg-white hover:text-black text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors duration-300 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A12.044 12.044 0 0112 15c2.5 0 4.8.8 6.879 2.121M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Entrar</span>
            </button>
          </Link>
        </div>

        {/* Menu Hambúrguer (Mobile) */}
        <div className="xl:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="xl:hidden bg-gray-700 px-4 py-2 absolute top-16 left-0 w-full">
            <Link
              to="/"
              className="block py-2 font-semibold text-base hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className="block py-2 font-semibold text-base hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/planos"
              className="block py-2 font-semibold text-base hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </Link>
            <Link
              to="/contato"
              className="block py-2 font-semibold text-base hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link
              to="/entrar"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className=" border-2 border-white hover:bg-white hover:text-black text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors duration-300 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A12.044 12.044 0 0112 15c2.5 0 4.8.8 6.879 2.121M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span> classname=""Entrar</span>
              </button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
