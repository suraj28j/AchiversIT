import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import SingleBlog from '../components/SingleBlog/SingleBlog'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import CreateBlog from '../components/CreateBlog/CreateBlog'
import UpdateUser from '../components/UpdateUser/UpdateUser'
import UpdateBlog from '../components/UpdateBlog/UpdateBlog'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/singleblog/:id' element={<SingleBlog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/createblog' element={<CreateBlog />} />
            <Route path='/updateuser/:id' element={<UpdateUser />} />
            <Route path='/updateblog/:id' element={<UpdateBlog />} />
        </Routes>
    )
}

export default Routing
