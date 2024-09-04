import React, { useRef,useEffect } from 'react'

const UseRef = () => {

    const fname = useRef(null);
    const lname = useRef(null);
    const password = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fname.current.value);
        console.log(lname.current.value);
        console.log(password.current.value);
    }
    
    // for focusing
    useEffect(()=>{
        password.current.focus()
    },[])

  return (
    <div className='container'>
        <div className='row mt-4'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
            <h2 className='text-center mb-4'>UseRef Hook</h2>
      <form>
        <input
         type='text'
         className='form-control'
         placeholder='Enter Your First Name'
         ref={fname}
         />
          <input
         type='text'
         className='form-control mt-2'
         placeholder='Enter Your Last Name'
         ref={lname}
         />
          <input
         type='password'
         className='form-control mt-2'
         placeholder='Enter Your Password'
         ref={password}
         />
         <button className='btn btn-primary mt-2' onClick={handleSubmit}>Submit</button>
      </form>
            </div>
            <div className='col-md-4'></div>
        </div>
    </div>
  )
}

export default UseRef

/*
=> UseState hook will re-render when the content changes and update to UI
=> UseRef doesn't notify when its content changes. (Mutating the .current property)
=>"It will not cause re-render"
*/
