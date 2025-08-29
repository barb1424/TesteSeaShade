import { LayoutPanelLeft, NotebookPen, BookOpenText, PackageOpen, ChartSpline, ChefHat, Info, ChevronFirst, ChevronLast, User, EllipsisVertical, Settings } from "lucide-react";
import { useState } from "react";
import logo from "../assets/darklogo.svg";
const Sidebar = () => {

    const[expanded, setExpanded] = useState(true);

    return (
        <aside className={`transition-all duration-300 border-b border-azul-100 border-r h-screen flex bg-slate-100 shadow-sm flex-col ${expanded? "w-2/3 md:w-1/3 lg:w-1/5" : "w-16"}`}>
        <header className="text-slate-600 w-full flex flex-col  font-medium  h-full">
            <div className="flex items-center text-slate-600 mb-2">

                <div className={`flex-1 overflow-hidden transition-all duration-300${expanded? "p-4 pl-6 flex-grow" : "w-0"} `}>
                    <img src={logo} alt="Logo do Seashade" className="w-28"/>
                </div>

                <button onClick={() => setExpanded(!expanded)} className={`py-4 px-4 flex cursor-pointer hover:bg-slate-200 transition-all duration-300 ${expanded ? "" : ""}`}>
                    {expanded? <ChevronFirst size="32"/>: <ChevronLast size="32"/>}
                </button>

            </div>
            <nav className="text-lg flex flex-col px-3 gap-2">
                <ul className="flex flex-col flex-3 border-b border-azul-100 pb-2">
                    <li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className="min-w-10"><LayoutPanelLeft/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Painel</div></li>
                    <li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className="min-w-10"><NotebookPen/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Pedidos</div></li>
                    <li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className="min-w-10"><BookOpenText/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Cardápio</div></li>
                    <li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className="min-w-10"><PackageOpen/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Estoque</div></li>
                    <li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className="min-w-10"><ChartSpline/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Relatórios</div></li>
                    <li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className="min-w-10"><ChefHat/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Modo Produção</div></li>
                </ul>
                <ul className="flex flex-col flex-1 justify-around">
                    <li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className="min-w-10"><Info/></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all w-0"}`}>Ajuda</div></li>
                    <li className="cursor-pointer h-full flex p-2 items-center hover:bg-azul-100 hover:text-azul-600 rounded-lg transition-all duration-300 truncate"><div className="min-w-10"><Settings /></div><div className={`${expanded? "flex-grow" : "overflow-hidden transition-all duration-300 w-0"}`}>Configurações</div></li>
                </ul>
        </nav>
    </header>
       <div className="relative px-4 cursor-pointer hover:bg-slate-200 transition-all duration-300 flex border-t border-azul-100 text-slate-600 items-center justify-center py-4">
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