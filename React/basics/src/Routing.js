import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AboutHooks from './hooks/AboutHooks'
import UseState from './hooks/UseState'
import UseEffect from './hooks/UseEffect'
import UseEffectPagination from './hooks/UseEffectPagination'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AboutHooks/>} />
            <Route path='/usestate' element={<UseState/>} />
            <Route path='/useeffect' element={<UseEffect/>} />
            <Route path='/useeffectpagination' element={<UseEffectPagination/>}/>
        </Routes>
      
    </div>
  )
}

export default Routing
