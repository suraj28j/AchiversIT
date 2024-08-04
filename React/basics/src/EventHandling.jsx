import React from 'react'

const EventHandling = () => {

    let handleChange = (e) => {
        console.log(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submit Successful");
    }
    
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <h2>Contact Form</h2>
                <form onSubmit={handleSubmit}>

                    <input
                    type='text'
                    placeholder='Enter your name'
                    className='form-control mt-2'
                    onChange={handleChange}
                    />

                    <input
                    type='email'
                    placeholder='Enter your email'
                    className='form-control mt-2'
                    onChange={handleChange}
                    />

                     <input
                    type='text'
                    placeholder='Enter your phone number'
                    className='form-control mt-2'
                    onChange={handleChange}
                    />

                     <input
                    type='passsword'
                    placeholder='Enter your password'
                    className='form-control mt-2'
                    onChange={handleChange}
                    />

                    <button className='btn btn-primary mt-2'>Submit</button>
                </form>
            </div>
            <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  )
}

export default EventHandling
