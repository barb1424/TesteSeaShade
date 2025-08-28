import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import NovoPedido from './pages/NovoPedido';
const App = () => {
  return (
    
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/novo-pedido' element={<NovoPedido />} />
      </Routes>
    
    
  )
}

export default App

