import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Products from '../Components/Products'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Cart from '../Cart/Cart'
import Register from '../Components/Register'
import Login from '../Components/Login'
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default Routing
