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

