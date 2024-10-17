import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/config'
import { toast } from 'react-toastify';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    })

    const handleChange = (e) => {
        setCredentials((preV) => ({ ...preV, [e.target.id]: e.target.value }))
        // console.log(credentials);
    }
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                credentials: "include",
                body: JSON.stringify(credentials)
            });
            const result = await res.json();
            console.log(result);
            if (result.success === true) {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.log("Error:message");
        }
    }
    return (
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
                        <div className="mb-3 form-check">
                            <p>Don't have account? <Link to={"/register"}>Register</Link></p>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default Login
