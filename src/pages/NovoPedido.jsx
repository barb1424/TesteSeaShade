import Sidebar from "../components/Sidebar"
import { Undo2, } from 'lucide-react';
import { PiUmbrellaFill } from "react-icons/pi";

const NovoPedido = () => {
    return(
        <div className="text-slate-600 flex h-screen ">
            <Sidebar/>
            <div className="flex flex-col w-full ml-16 py-4 px-4 gap-4">
            <header className="flex justify-between">
                <button><Undo2 size="30"/></button>
                <button className="bg-orange-500 text-slate-50 font-medium rounded px-3 py-0.5 shadow-sm">Novo Pedido</button>
            </header>
            <main className="h-full">
                <h1 className="text-2xl font-bold">Abrir Pedido</h1>
                <form>
                    <fieldset className="flex flex-col gap-2 my-3">
                        <label>
                            <input
                            className="inset-shadow-xs focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-5 rounded border border-slate-300 text-slate-900 w-full" 
                            type="text" 
                            name=""
                            placeholder="Atendente"/>
                        </label>

                        <label>
                            <input
                            className="inset-shadow-xs focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-5 rounded border border-slate-300 text-slate-900 w-full" 
                            type="text" 
                            name=""
                            placeholder="Número do guarda-sol"/>
                        </label>

                        <label className="flex justify-between items-center">
                            Pedido rápido
                            <input type="checkbox" className="transform scale-120"/>
                        </label>

                        <label>
                            <textarea className="inset-shadow-xs focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-5 rounded border border-slate-300 text-slate-900 w-full" rows="4" cols="50" placeholder="Observações"></textarea>
                        </label>

                        <button className="shadow-sm bg-indigo-600 text-slate-50 font-medium rounded py-2">Criar comanda</button>
                    </fieldset>
                </form>
                <div className="text-amber-500 flex flex-col bg-yellow-100 rounded-lg p-2 gap-2">
                    <div className=" font-bold flex justify-center text-xl">Guarda-sóis: 13</div>
                    <div className="flex flex-wrap itens-center justify-center gap-1">
                    <PiUmbrellaFill size="49"/>
                    <PiUmbrellaFill size="49"/>
                    <PiUmbrellaFill size="49"/>
                    <PiUmbrellaFill size="49"/>
                    <PiUmbrellaFill size="49"/>
                    <PiUmbrellaFill size="49"/>
                    <PiUmbrellaFill size="49"/>
                    <PiUmbrellaFill size="49"/>
                    <PiUmbrellaFill size="49"/>
                    <PiUmbrellaFill size="49"/>
                    <PiUmbrellaFill size="49"/>
                    <PiUmbrellaFill size="49"/>
                    <PiUmbrellaFill className="text-red-500" size="49"/>
                    </div>
                </div>
            </main>
        </div>
        </div>

    )
}
export default NovoPedido;