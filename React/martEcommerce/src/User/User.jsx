import logo from '../Images/logo.png'
import React from 'react'

const User = () => {
  return (
    <div className='container'>
      <div className='row mt-4 mb-4 text-center'>
        <div className='col-md-4'></div>

        <div className='col-md-4 mt-4 mb-4 border '>
        <div className='row mt-2'>
        <img src={logo} alt='logo' className='img-fluid'></img>
        </div>
        <div className='row mt-4 mb-4 d-flex justify-content-center'>
          <h3>USER LOGIN</h3>
          <form className='w-75'>
          <div className="input-group mt-4">
            <span className="input-group-text" id="basic-addon1"><i className="bi bi-person-fill"></i></span>
            <input type='text' className='form-control' aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mt-4">
            <span className="input-group-text" id="basic-addon1"><i className="bi bi-lock-fill"></i></span>
            <input type='text' className='form-control' aria-label="Password" aria-describedby="basic-addon1"/>
          </div>
          </form>
        </div>
        </div>

        <div className='col-md-4'></div>
      </div>
    </div>
  )
}

export default User
