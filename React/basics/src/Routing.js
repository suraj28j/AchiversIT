import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AboutHooks from './hooks/AboutHooks'
import UseState from './hooks/UseState'
import UseEffect from './hooks/UseEffect'
import UseEffectPagination from './hooks/UseEffectPagination'
import UseRef from './hooks/UseRef'
import UseReducer from './hooks/UseReducer'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AboutHooks/>} />
            <Route path='/usestate' element={<UseState/>} />
            <Route path='/useeffect' element={<UseEffect/>} />
            <Route path='/useeffectpagination' element={<UseEffectPagination/>}/>
            <Route path='/useref' element={<UseRef/>}/>
            <Route path='/usereducer' element={<UseReducer/>}/>
        </Routes>
    </div>
  )
}

export default Routing
