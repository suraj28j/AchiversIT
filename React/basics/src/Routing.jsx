import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AboutHooks from './hooks/AboutHooks'
import UseStateHook from './hooks/UseStateHook'
import UseEffectHooks from './hooks/UseEffectHooks'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AboutHooks/>} />
            <Route path='/usestate' element={<UseStateHook/>} />
            <Route path='/useeffect' element={<UseEffectHooks/>} />
        </Routes>
      
    </div>
  )
}

export default Routing
