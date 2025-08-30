import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import NovoPedido from './pages/NovoPedido';
import Cardapio from './pages/Cardapio';
import Inicio from './pages/Inicio';
import Pedidos from './pages/Pedidos';
const App = () => {
  return (
    
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/novo-pedido' element={<NovoPedido />} />
        <Route path='/cardapio' element={<Cardapio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/pedidos' element={<Pedidos />} />
      </Routes>
    
    
  )
}

export default App

