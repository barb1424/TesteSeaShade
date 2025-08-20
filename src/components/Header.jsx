import logo from "../assets/logoteste.svg";
const Header = () => {
    return (
    <header className="text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <h1 className="sr-only">
            SeaShade
          </h1>
          <a href="/">
        <img
          src={logo}
          alt="SeaShade Logo"
          className="h-10 flex-shrink-0"
        />
      </a>
          <nav className="hidden md:flex space-x-14">
            <a href="#" class="line">Início</a>
            <a href="#" class="line">Sobre</a>
            <a href="#" class="line">Planos</a>
            <a href="#" class="line">Contato</a>
          </nav>
          <div>
            <button className="cursor-pointer bg-myCyan hover:bg-myDarkCyan text-slate-100 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors duration-300 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A12.044 12.044 0 0112 15c2.5 0 4.8.8 6.879 2.121M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Entrar</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    );
}

export default Header;