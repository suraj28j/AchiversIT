import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/config'
import useFetch from '../hooks/useFetch'
import blogimg from '../../img/blog.png'

const SingleBlog = () => {
    const { id } = useParams()
    const {
        data: blog,
        loading,
        error
    } = useFetch(`${BASE_URL}/blog/getsingleblog/${id}`);
    console.log(blog);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <img src={blogimg} alt='blogimg' />
                    <h4>Title : {blog.title}</h4>
                    <p>Content : {blog.content}</p>
                </div>
                <div className='col-md-4'></div>

            </div>
        </div>
    )
}

export default SingleBlog
