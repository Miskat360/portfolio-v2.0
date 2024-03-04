import React from 'react'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Work from './pages/Work/Work'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App