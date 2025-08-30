import Sidebar from "../components/Sidebar"
import HeaderLogged from "../components/HeaderLogged"
import IconList from "../components/IconList"
import { Link } from 'react-router-dom';

const NovoPedido = () => {
const link = "";
const quantidade = 14;    
    return(
        <div className="text-slate-600 flex h-screen ">
            <Sidebar/>
            <div className="flex flex-col w-full ml-16 py-4 px-4">
            <HeaderLogged hasUndo link="/Pedidos">Novo Pedido</HeaderLogged>
            <main className="h-full">
                <form>
                    <fieldset className="flex flex-col gap-3 my-5">
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

                        <label className="flex justify-between items-center text-lg">
                            Pedido rápido
                            <input type="checkbox" className="transform scale-123"/>
                        </label>

                        <label>
                            <textarea className="inset-shadow-xs focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-5 rounded border border-slate-300 text-slate-900 w-full" rows="4" cols="50" placeholder="Observações"></textarea>
                        </label>

                        <button className="cursor-pointer shadow-sm bg-indigo-600 text-slate-50 font-medium rounded py-2">Criar comanda</button>
                    </fieldset>
                </form>
                <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold">Guarda-sóis: <span className="text-orange-500">{quantidade}</span></p>
                    <div className="flex">
                        {/* Implementar numeração nos guarda-sóis e função ocupado ou livre. Torna-los clicáveis. O guarda-sol clicado o numero irá para o input; Se estiver ocupado a cor do icone será text-red-500 */}
                     <IconList quantidade={quantidade}/>
                    </div>
                </div>
            </main>
        </div>
        </div>

    )
}
export default NovoPedido;