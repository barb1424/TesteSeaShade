const Header = () => {
    return (
    <header className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-4xl">
            SEASHADE
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-teal-300">Início</a>
            <a href="#" className="hover:text-teal-300">Sobre</a>
            <a href="#" className="hover:text-teal-300">Planos</a>
            <a href="#" className="hover:text-teal-300">Contato</a>
          </nav>
          <div>
            <button className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A12.044 12.044 0 0112 15c2.5 0 4.8.8 6.879 2.121M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    );
}

export default Header