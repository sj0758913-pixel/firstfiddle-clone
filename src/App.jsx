import React from 'react'
import Header from './component/Header'
import Home from './pages/Home'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about'
import Brand from './pages/Brand'
import Ourteam from './pages/Ourteam'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>} />
         <Route path='/brand' element={<Brand/>}/>
         <Route path='/ourteam' element={<Ourteam/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </>
  )
}

export default App
