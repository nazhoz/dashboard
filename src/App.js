import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar'
import Home from './pages/Home/Home'
import Analytics from './pages/Analytics/Analytics'
import Finance from './pages/Finance/Finance'
import Reports from './pages/Reports/Reports'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='analytics' element={<Analytics/>}/>
        <Route path='finance' element={<Finance/>}/>
        <Route path='reports' element={<Reports/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App