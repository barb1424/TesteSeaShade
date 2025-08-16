
/*import './App.css'

function App() {
  return (
    <div>
      <div>
        <h1>SEASHADE</h1>
        <h2>Leveza e eficiência para o seu negócio à beira-mar.</h2>
        <p class="font-sans ... text-blue-600 dark:text-sky-400">The quick brown fox ...</p>
        <p class="font-serif ...">The quick brown fox ...</p>
        <p class="font-mono ...">The quick brown fox ...</p>
      </div>
    </div>
  )
}

export default App

*/

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/login' element={<Login /> }></Route>
      </Routes>
    </>
  )
}

export default App

