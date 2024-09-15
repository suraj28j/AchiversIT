import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Home/Home'
import Shop from '../Shop/Shop'
import Cart from '../Cart/Cart'
import User from '../User/User'
import Product from '../Product/Product'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/product/:id' element={<Product/>} />
      </Routes>
    </>
  )
}

export default Router
