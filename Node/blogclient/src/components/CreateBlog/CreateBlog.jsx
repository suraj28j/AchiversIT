import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL, token } from '../../utils/config'


const CreateBlog = () => {

    const [blog, setBlog] = useState({
        topic: undefined,
        title: undefined,
        content: undefined
    })
    // console.log("Token : ",token);

    const handleTopicChange = (e) => {
        setBlog((preV) => ({ ...preV, topic: e.target.value }))
    }

    const handleChange = (e) => {
        setBlog((preV) => ({ ...preV, [e.target.id]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/blog/createblog`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(blog)
            })
            const result = await res.json();
            console.log(result);

        } catch (error) {
            console.log(error);
        }
    }
    // console.log(blog);
    return (
        <div className='container mt-2'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="topic" className="form-label">Topic</label>
                    <select id='topic' className='form-select mb-2' placeholder='Select' onChange={handleTopicChange}>
                        <option value="" hidden>Select Topic</option>
                        <option value="HTML">HTML</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="ReactJS">ReactJS</option>
                        <option value="AngularJS">AngularJS</option>
                        <option value="NodeJS">NodeJS</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder='Title of Blog' onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea className="form-control" id="content" rows='10' onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreateBlog
