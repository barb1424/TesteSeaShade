import Header from '../components/Header';
import { useState } from 'react';
import { PiUserCirclePlus } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Cadastro = () => {
 const[email, setEmail] = useState('');
 const[pass, setPass] = useState('');
 const[name, setName] = useState('');
 const[barraca,setBarraca] = useState('');
  return (
    <div className=" bg-slate-100 min-h-screen flex flex-col gap-6">
      <Header />
        <main className="flex-1 h-screen flex flex-col items-center gap-5">
          <div className="flex flex-col items-center">
        <h1 className=" flex items-center text-4xl font-medium p-4 text-indigo-950 gap-3"><PiUserCirclePlus size="35" strokeWidth={4}/> Cadastre-se</h1>
        <h2 className="text-indigo-800 text-center">Novo por aqui? Você pode concluir seu cadastro ou <br/>ir para a<Link to="/login"><span className="border-b hover:text-indigo-600"> área de login</span></Link></h2>
        </div>
        <form>
          <fieldset className="flex flex-col gap-6">
             <label className="text-xl flex flex-col gap-2">
               Nome <br/>
              <input 
              className=" hover:border-slate-200 focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-6 rounded border border-slate-300 text-slate-500 w-100 md:w-110"
              value = {name}
              type='text'
              placeholder='Seu nome completo'
              onChange={e=> setName(e.target.value)}
              />
            </label>

            <label className="text-xl flex flex-col gap-2">
               Barraca <br/>
              <input 
              className=" hover:border-slate-200 focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-6 rounded border border-slate-300 text-slate-500 w-100 md:w-110"
              value = {name}
              type='text'
              placeholder='Nome da sua barraca / quiosque'
              onChange={e=> setName(e.target.value)}
              />
              
              
            </label>
            
            <label className="text-xl flex flex-col gap-2">
               E-mail: <br/>
              <input 
              className=" hover:border-slate-200 focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-6 rounded border border-slate-300 text-slate-500 w-100 md:w-110"
              value = {email}
              type='text'
              placeholder='Ex: email@hotmail.com'
              onChange={e=> setEmail(e.target.value)}
              />
            </label>

            <label className="text-xl flex flex-col gap-2">
              Senha:
              <input 
              className="hover:border-slate-200 focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-6 rounded border border-slate-300 text-slate-500"
              value={pass}
              type='password'
              placeholder='••••••••••••'
              onChange={e=> setPass(e.target.value)}
              />
            </label>
            <div className="text-2xl flex flex-col">
          <button className="bg-orange-500 text-white py-4 lg:py-3 font-medium transition-color duration-300 hover:bg-orange-400 cursor-pointer" type="submit">Cadastrar</button>
          </div>
          </fieldset>
        </form>
        </main>
    </div>
  );
};

export default Cadastro;