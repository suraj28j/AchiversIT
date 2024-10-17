import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import SingleBlog from '../components/SingleBlog/SingleBlog'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/singleblog/:id' element={<SingleBlog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

        </Routes>
    )
}

export default Routing
