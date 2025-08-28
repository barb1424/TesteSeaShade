import { LayoutPanelLeft, NotebookPen, BookOpenText, PackageOpen, ChartSpline, ChefHat, Info, ChevronFirst, ChevronLast, User, EllipsisVertical, Settings } from "lucide-react";
import logo from "../assets/logo.svg";
const Sidebar = () => {
    return (
        <aside className="h-screen w-2/3 flex">
        <header className="w-full h-full flex flex-col bg-azul-700 shadow-sm">
        <div className="flex px-6 py-4 justify-between items-center text-slate-50">
        <img src={logo} alt="Logo do Seashade" className="max-w-28" />
        <ChevronFirst size="32"/>
        </div>
        <nav className="h-full text-slate-50 text-lg flex flex-col px-3 gap-3">
        <ul className="flex flex-col justify-around flex-3 border-b border-slate-50 pb-3">
            <li className="flex px-2 h-full items-center hover:bg-sky-600 rounded-lg transition-all duration-300"><div className="w-10"><LayoutPanelLeft/></div>Painel</li>
            <li className="flex px-2 h-full items-center hover:bg-sky-600 rounded-lg transition-all duration-300"><div className="w-10"><NotebookPen/></div>Pedidos</li>
            <li className="flex px-2 h-full items-center hover:bg-sky-600 rounded-lg transition-all duration-300"><div className="w-10"><BookOpenText/></div>Cardápio</li>
            <li className="flex px-2 h-full items-center hover:bg-sky-600 rounded-lg transition-all duration-300"><div className="w-10"><PackageOpen/></div>Estoque</li>
            <li className="flex px-2 h-full items-center hover:bg-sky-600 rounded-lg transition-all duration-300"><div className="w-10"><ChartSpline/></div>Relatórios</li>
            <li className="flex px-2 h-full items-center hover:bg-sky-600 rounded-lg transition-all duration-300"><div className="w-10"><ChefHat/></div>Modo Produção</li>
        </ul>
        <ul className="flex flex-col flex-1 justify-around">
            <li className="flex px-2 h-full items-center hover:bg-sky-600 rounded-lg transition-all duration-300"><div className="w-10"><Info/></div>Ajuda</li>
            <li className="flex px-2 h-full items-center hover:bg-sky-600 rounded-lg transition-all duration-300"><div className="w-10"><Settings /></div>Configurações</li>
        </ul>
        </nav>
        <div className=" flex border-t border-slate-50 text-slate-50 justify-center items-center gap-3 px-2 py-3">
        <div className=" aspect-square flex flex-1 rounded bg-laranja-600 justify-center items-center text-4xl h-full font-extrabold"><User size="40"/></div>
        <div className="flex flex-col flex-3 ">
        <div className="flex">John Doe</div>
        <div className="flex text-sm">johndoe@hotmail.com</div>
        </div>
        <div className="flex flex-1 "><EllipsisVertical /></div>
        </div>
        </header>
</aside>
    )
}

export default Sidebar;