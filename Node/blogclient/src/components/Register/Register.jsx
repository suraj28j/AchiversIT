import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/config'
import { toast } from 'react-toastify'


const Register = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
        name: undefined,
        phone: undefined
    });
    const handleChange = (e) => {
        setCredentials((preV) => ({ ...preV, [e.target.id]: e.target.value }));
        // console.log(credentials);
    }

    const nevigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/auth/registeruser`, {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(credentials)
            });
            const result = await res.json();

            if (!result.ok) {
                console.log("result.message", result.message);
            }

            if(result.success === true){
                toast.success(result.message)
                nevigate("/login");
            }else{
                toast.error(result.message)
            }
        } catch (error) {
            console.log("Error from");
        }
    }
    return (
        <>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form onSubmit={handleClick}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="phone" onChange={handleChange} />
                            </div>
                            <div className="mb-3 form-check">
                                <p>Already have account? <Link to={"/login"}>Login</Link></p>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        </>
    )
}

export default Register
