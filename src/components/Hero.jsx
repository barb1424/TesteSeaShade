import Button1 from "./Button1";
import decoracaolg from "../assets/decoracaolg.svg";
const Hero = () => {

    return(
            <div className="text-slate-100 h-screen relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start pt-56">
                <h2>
                    <span className="text-2xl">Seu negócio</span><br />
                    <strong className="text-7xl">SEGURO E <br />ORGANIZADO.</strong><br /> 
                    <span className="text-lg font-light">Gerencie pedidos. estoque e mesas com praticidade.</span>
                </h2>
                <div>
                    <Button1>Experimente já!</Button1>
                    <a className="line relative z-10 inline-flex mx-18 my-2 rounded-full cursor-pointer mt-4 text-xl" href="#" >Saiba mais</a>
                </div>
                </div>
                <img className="absolute right-0 bottom-0 w-[800px] lg:w-[1000px] xl:w-[1200px]" src={decoracaolg} alt="Decorativa" />
                </div>
    )
}

export default Hero;