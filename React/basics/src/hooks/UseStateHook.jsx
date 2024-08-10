import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {
    let[count,setCount] = useState(0);

    const Increment = () => {
        setCount(count+1)
    }
    const Decrement = () => {
        setCount(count-1)
    }
    const Reset = () => {
        setCount(0)
    }
    const Stop = () => {
        if(count<0)
            setCount(0)
        else
            setCount(count-1)
    }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'></div>
        <div className='col-4'>
            <h2 className='text-center mt-4 '>Count : {count}</h2>
            <button className='btn btn-primary m-2'onClick={Increment}>Increment</button>
            <button className='btn btn-danger m-2' onClick={Decrement}>Decrement</button>
            <button className='btn btn-warning m-2' onClick={Reset}>Reset</button>
            <button className='btn btn-success m-2' onClick={Stop}>Stop</button>
        </div>
        <div className='col-4'></div>
      </div>
    </div>
  )
}

export default UseStateHook
