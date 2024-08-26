import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Cart from '../Cart/Cart'


const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default Routing
