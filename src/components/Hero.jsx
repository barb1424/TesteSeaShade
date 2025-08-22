import Button1 from "./Button1";
import decoracaolg from "../assets/decoracaolg.svg";
import { Link } from 'react-router-dom';

const Hero = () => {

    return(
    <section className=" text-slate-100 flex-1 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start pt-12 sm:pt-16 lg:pt-20 pb-10 relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          <span>Seu negócio</span>
          <br />
          <strong className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
            Seguro e <br />organizado.
          </strong>
          <br />
          <span className="text-lg sm:text-xl font-light mt-2">
            Gerencie pedidos, estoque e mesas com praticidade.
          </span>
        </h1>
        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button1>Experimente já!</Button1>
          <Link
            to="/saiba-mais"
          >
          </Link>
          <Button1>Saiba mais</Button1>
        </div>
      </div>
      <div className="md:absolute md:right-0 md:bottom-0">
        <img
          src={decoracaolg}
          alt="Ilustração decorativa de um ambiente de negócios organizado"
          className="w-auto h-auto max-w-[1200px] object-contain"
        />
      </div>
    </section>
    )
}

export default Hero;