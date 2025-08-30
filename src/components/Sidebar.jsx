import { LayoutPanelLeft, NotebookPen, BookOpenText, PackageOpen, ChartSpline, ChefHat, Info, ChevronFirst, ChevronLast, User, EllipsisVertical, Settings } from "lucide-react";
import { useState } from "react";
import logo from "../assets/darklogo.svg";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const[expanded, setExpanded] = useState(false);

    return (
        <aside className={`fixed transition-all duration-300 border-b border-slate-300 border-r h-screen flex bg-slate-50 shadow-sm flex-col ${expanded? "w-2/3 md:w-1/3 lg:w-1/5" : "w-16"}`}>
        <header className="text-slate-600 w-full flex flex-col  font-medium  h-full">
            <div className="flex justify-center items-center text-slate-600 mb-2">

                <div className={`flex overflow-hidden transition-all duration-300${expanded? "p-4 pl-6 flex-grow" : "justify-center w-0"} `}>
                    <img src={logo} alt="Logo do Seashade" className="w-28"/>
                </div>

                <button onClick={() => setExpanded(!expanded)} className={`py-4 px-4 flex cursor-pointer hover:bg-slate-200 transition-all duration-300 ${expanded ? "" : ""}`}>
                    {expanded? <ChevronFirst size="28"/>: <ChevronLast size="28"/>}
                </button>

            </div>
            <nav className={`text-lg flex flex-col gap-2 ${expanded? "px-3" : "items-center"}`}>
                <ul className="flex flex-col flex-3 border-b border-slate-300 pb-2">
                    
                    <Link to="/inicio"><li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className={`flex min-w-10 ${!expanded && "justify-center"}`}><LayoutPanelLeft/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Início</div></li></Link>

                    <Link to = "/pedidos"><li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className={`flex min-w-10 ${!expanded && "justify-center"}`}><NotebookPen/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Pedidos</div></li></Link>
                    
                    <Link to = "/cardapio"><li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className={`flex min-w-10 ${!expanded && "justify-center"}`}><BookOpenText/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Cardápio</div></li></Link>
                    
                    <Link to = "estoque"><li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className={`flex min-w-10 ${!expanded && "justify-center"}`}><PackageOpen/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Estoque</div></li></Link>
                    
                    <Link to = "relatorios"><li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className={`flex min-w-10 ${!expanded && "justify-center"}`}><ChartSpline/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Relatórios</div></li></Link>
                    
                    <Link to = "producao"><li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className={`flex min-w-10 ${!expanded && "justify-center"}`}><ChefHat/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Modo Produção</div></li></Link>
                
                </ul>
                <ul className="flex flex-col flex-1 justify-around">
                    <Link to = "ajuda"><li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className={`flex min-w-10 ${!expanded && "justify-center"}`}><Info/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Ajuda</div></li></Link>
                    
                    <Link to = "ajustes"><li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className={`flex min-w-10 ${!expanded && "justify-center"}`}><Settings /></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all duration-300 w-0"}`}>Configurações</div></li></Link>
                    

                </ul>
        </nav>
    </header>
       <div className="relative px-4 cursor-pointer hover:bg-slate-200 transition-all duration-300 flex border-t border-slate-300 text-slate-600 items-center justify-center py-4">
            <div className={`flex items-center overflow-hidden transition-all duration-300 ${expanded ? "flex-1 gap-3" : "w-0"}`}>
                <div className="rounded aspect-square bg-azul-200 flex justify-center items-center font-extrabold text-azul-600 w-9 md:w-13">
                    <User size="auto"/>
                </div>
                <div className="flex flex-col min-w-0">
                    <div className="font-bold text-sm md:text-lg truncate">John Doe</div>
                    <div className="text-xs md:text-sm truncate">johndoe@hotmail.com</div>
                </div>
            </div>
            <button onClick={() => setExpanded(!expanded)} className="cursor-pointer">
             <EllipsisVertical size={22}/>
            </button>
        </div>
</aside>
    )
}

export default Sidebar;