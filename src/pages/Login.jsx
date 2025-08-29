import Header from '../components/Header';
import { useState } from 'react';
import { PiUserCircle } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Login = () => {
 const[name, setName] = useState('');
 const[pass, setPass] = useState('')
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col gap-1 md:gap-6">
      <Header />
        <main className="m-3 flex-1 flex flex-col items-center gap-5">
          <div className="flex flex-col items-center">
        <h1 className="  flex-wrap flex items-center text-3xl font-medium px-4 py-4 text-indigo-950 gap-3"><PiUserCircle size="35" strokeWidth={4}/> Entre na sua conta</h1>
       <h2 className="text-indigo-800 text-center flex-wrap">Não tem uma conta ainda? <Link to="/cadastro"><span className="border-b hover:text-indigo-600">cadastre-se aqui</span></Link></h2>
        </div>
        <form className="w-full md: md:max-w-md max-w-sm mx-auto">
          <fieldset className="w-full flex flex-col gap-3">
            <label className="text-xl flex flex-col gap-2">
               E-mail: <br/>
              <input 
              className=" hover:border-slate-200 focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-6 rounded border border-slate-300 text-slate-900 w-full"
              value = {name}
              type='text'
              placeholder='ex: email@hotmail.com'
              onChange={e=> setName(e.target.value)}
              />
            </label>

            <label className="text-xl flex flex-col gap-2">
              Senha:
              <input 
              className=" hover:border-slate-200 focus:ring focus:outline-none focus:border-indigo-600 bg-white py-4 lg:py-3 px-6 rounded border border-slate-300 text-slate-900 w-full"
              value={pass}
              type='password'
              placeholder='••••••••••••'
              onChange={e=> setPass(e.target.value)}
              />
            </label>
            <div className="text-xl flex flex-col gap-1">
          <button className="flex flex-col bg-orange-500 text-white py-4 lg:py-3 font-medium transition-color duration-300 hover:bg-orange-400 cursor-pointer w-full" type="submit">Cadastrar</button>
          <button className=" text-orange-500 py-3 cursor-pointer w-full" type="submit">Esqueci minha senha</button>
          </div>
          </fieldset>
        </form>
        </main>
    </div>
  );
};

export default Login;