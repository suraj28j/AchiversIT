import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <div className='row'>
        <h2 className='text-center mt-4'>Contact Us</h2>
        <hr className='mt-2'/>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
            <form className='mt-2'>
                <label className='form-label' for='username'>Name</label>
                <input type='text' id='username' className='form-control' placeholder='Enter Your Name'/>
                <label className='form-label mt-3' for='email'>Email</label>
                <input type='text' id='email' className='form-control' placeholder='name@example.com'/>
                <label className='form-label mt-3' for='password'>Message</label>
                <input type='text' id='password' className='form-control' placeholder='Enter your message' style={{height:'10rem'}}/>
                <button className='btn btn-secondary mt-4'>Send</button>
            </form>
            <div className='mt-4'>Made with <span style={{color:'red'}}>&#9829;</span> by <u>AchiversIT</u></div>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  )
}

export default Contact
