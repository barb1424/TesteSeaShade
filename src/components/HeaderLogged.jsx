import { Undo2, PenLine } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderLogged = ({children, hasUndo, link}) => {
    return (
        <header className="flex flex-col gap-7">
            <div className="flex justify-between">
            { hasUndo && (<button><Link to = {link}><Undo2 size="30"/></Link></button>)}
            <Link to = "/novo-pedido" className ="hover: bg-orange-500 text-slate-50 font-medium rounded px-3 py-0.5 shadow-sm flex gap-2 items-center justify-center"><PenLine size="16" strokeWidth={3}/>Novo Pedido</Link>
            </div>
            <h1 className="text-2xl font-bold">{children}</h1>
        </header>                
    )
}

export default HeaderLogged;