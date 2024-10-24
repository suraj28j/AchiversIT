import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL, token } from '../../utils/config';

const UpdateUser = () => {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleInputChange = (e) => {
        setFormData((preV) => ({ ...preV, [e.target.id]: e.target.value }))
    }
    // console.log(formData);


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/user/${id}`, {
                method: "PUT",
                headers: {
                    'Content-type': "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })
            const result = await res.json();
            console.log(result);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container mt-2'>
            <div className='row'>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={submitHandler}>
                        <input
                            type='text'
                            placeholder='Update your name'
                            className='form-control mt-2'
                            id='name'
                            name='name'
                            // value={}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type='email'
                            placeholder='Update your email'
                            className='form-control mt-2'
                            id='email'
                            name='email'
                            // value={}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type='text'
                            placeholder='Update your phone number'
                            className='form-control mt-2'
                            id='phone'
                            name='phone'
                            // value={}
                            onChange={handleInputChange}
                            required
                        />
                        <button className='btn btn-dark mt-2' type='submit'>Update profile</button>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default UpdateUser
