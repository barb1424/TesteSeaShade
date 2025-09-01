import Header from '../components/Header'
import decoracaolg from "../assets/decoracaolg2.webp";
import decoracaosm from "../assets/decoracaosm2.webp";
import { Link } from 'react-router-dom';
import ArrowButton from '../components/ArrowButton'
import 'animate.css';

const Home = () => {

  return (
    <div className="bg-sky-600 ">
    <div className='flex flex-col relative min-h-[90vh]'>
      {/* min-h-[90vh] */}
      <Header />
      <div className="relative z-10 w-full mx-auto flex-1 flex flex-col justify-center px-4">
        <main className="flex flex-col md:flex-row flex-1 md:mt-45 md:text-left justify-center">
          <div className="flex flex-col max-w-screen-2xl w-full">
          <h1 className="text-xl md:text-3xl font-bold sm:text-4xl">
            <span className="text-slate-50 font-light">
              Seu negócio
            </span><br />
            <strong className="md:text-7xl sm:text-[80px] text-[44px] break-words text-slate-50">
              Seguro &<br />
              <span className="break-words">Organizado.</span>
            </strong><br />
          </h1>

          <p className="text-2xl font-light mt-4 text-slate-50">
            Gerencie <span className="text-yellow-300 font-medium">pedidos</span>, <span className="text-yellow-300 font-medium">estoque</span> e <span className="text-yellow-300 font-medium">mesas</span> com praticidade.
          </p>
          <div className="flex flex-col md:flex-row mt-8">
            <Link
            to="/cadastro" className="bg-gradient-to-r from-amber-600 to-orange-600 text-slate-50 lg:px-24 md:px-25 cursor-pointer md:text-xl text-2xl py-4 text-center shadow-sm hover:brightness-110 transition-all duration-300">Comece já</Link>
            <a href="#sobre"><ArrowButton>Saiba mais</ArrowButton></a>
          </div>
          </div>
          <img
        className="hidden lg:flex absolute bottom-0 right-0 object-cover z-0"
        src={decoracaolg}
        alt="Imagem de fundo"
      />
      
        </main>
        
      </div>
      <img
        className="lg:hidden bottom-0 right-0 object-cover z-0 "
        src={decoracaosm}
        alt="Imagem de fundo"
      />
    </div>

    <section id="sobre" className="flex justify-center bg-sky-50 text-slate-700 p-5">
      <div className="max-w-screen-2xl w-full">
        <h2 className="text-4xl font-bold">Chegamos para facilitar a vida de quem trabalha na praia.</h2>

        <div className="flex flex-col gap-3 text-lg">
        
          {/* <p>
            O <strong>SeaShade</strong> chegou para facilitar a vida de quem trabalha na praia. Com ele, você consegue <strong>organizar pedidos</strong>, <strong>controlar o estoque</strong> e <strong>gerenciar mesas e guarda-sóis</strong> sem complicação. Tudo isso em um só lugar, pensado para que seu dia a dia fique mais tranquilo e você possa focar no que realmente importa: <strong>atender bem seus clientes</strong>.
          </p> 

          <p>
            Você também tem acesso a <strong>informações importantes</strong> sobre sua barraca, ajudando a tomar <strong>decisões inteligentes</strong> e deixar tudo sempre em ordem. Seja você dono de um comércio pequeno ou de uma operação maior, a plataforma se adapta ao seu ritmo e <strong>facilita sua rotina</strong>.
          </p>

          <p>
            Experimente o <strong>SeaShade</strong> e descubra como é <strong>simples</strong> gerenciar seu quiosque!
          </p>               */}
        </div>  
      </div>
    </section>

    {/* Footer */}
     <div className="text-white text-center bg-slate-900">
      Footer
    </div>
    </div>
    
  )
}

export default Home;