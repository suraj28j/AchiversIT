import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='container'>
      <div className='row'>
       <h2 className='text-center mt-4'>Register</h2>
        <hr className='mt-2'/>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
            <form className='mt-2'>
                <label className='form-label' for='username'>Full Name</label>
                <input type='text' id='username' className='form-control' placeholder='Enter Your Name'/>
                <label className='form-label mt-3' for='email'>Email address</label>
                <input type='text' id='email' className='form-control' placeholder='name@example.com'/>
                <label className='form-label mt-3' for='password'>Password</label>
                <input type='text' id='password' className='form-control' placeholder='Password'/>
                <p className='mt-3'>Already has an account? <Link to='/login'>Login</Link></p>
                <button className='btn btn-secondary'>Register</button>
            </form>
            <div className='mt-4'>Made with <span style={{color:'red'}}>&#9829;</span> by <u>AchiversIT</u></div>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  )
}

export default Register
