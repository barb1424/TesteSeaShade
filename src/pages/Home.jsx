import Header from '../components/Header'
import decoracaolg from "../assets/decoracaolg2.webp";
import decoracaosm from "../assets/decoracaosm2.webp";
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div className='bg-linear-to-r from-azul-700 to-sky-600 min-h-screen flex flex-col relative '>
      <Header />
      <div className="relative z-10 w-full max-w-screen-xl mx-auto flex-1 flex flex-col justify-center px-4">
        <main className="flex-1 mt-15 md:mt-45 md:text-left">
          <h1 className="text-xl md:text-3xl font-bold sm:text-4xl">
            <span className="text-slate-50 font-light tracking-wide ">
              Seu negócio
            </span><br />
            <strong className="md:text-7xl sm:text-[80px] text-[44px] leading-tight break-words text-slate-50">
              SEGURO &<br />
              <span className="bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent break-words">ORGANIZADO.</span>
            </strong><br />
          </h1>

          <p className="text-2xl font-light mt-4 text-slate-50">
            Gerencie <span className="text-amber-400">pedidos</span>, <span className="text-amber-400">estoque</span> e <span className="text-amber-400">mesas</span> com praticidade.
          </p>
          <div className="flex flex-col md:flex-row mt-8 justify-start">
            <Link to="/cadastro" className="bg-linear-to-r from-amber-600 to-orange-600 text-slate-50 lg:px-24 cursor-pointer md:text-xl text-2xl py-4 text-center md:px-25">Comece já</Link>
            <button className="text-slate-50 lg:px-24 cursor-pointer md:text-xl text-2xl py-4
            text-center md:px-25 hover:text-slate-300 transition-color duration-300">Saiba mais</button>
          </div>
        </main>
      </div>

      {/* Imagem de fundo */}
      <img
        className="hidden lg:flex absolute bottom-0 right-0 max-w-[1000px] object-cover z-0"
        src={decoracaolg}
        alt="Imagem de fundo"
      />

      <img
        className="lg:hidden absolute bottom-0 right-0 max-w-[1000px] object-cover z-0 "
        src={decoracaosm}
        alt="Imagem de fundo"
      />

    </div>
    
  )
}

export default Home;