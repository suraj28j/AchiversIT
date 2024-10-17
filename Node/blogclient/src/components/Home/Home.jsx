import React from 'react'
import { BASE_URL } from '../../utils/config'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import img from '../../img/blogImage.avif'

const Home = () => {
  const {
    data: blogData,
    loading,
    error,
  } = useFetch(`${BASE_URL}/blog/getallblog`);

  console.log(blogData);

  return (
    <>
      {loading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}

      {!loading && !error && (
        <div className='container'>
          <div className='row row-cols-1 row-cols-lg-3 row-cols-sm-1'>
            {
              blogData.map((blog) => (
                <div className='col mt-3 mb-3'>
                  <div className='p-3 bg-light'>
                    <img src={img} alt='img' className='img-fluid' />
                    <p className='mt-1'>Author : {blog.user.name}</p>
                    <h3>Title : {blog.title}</h3>
                    <Link to={`/singleblog/${blog._id}`}>
                      <button className='btn btn-primary'>Read more</button>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      )}
    </>
  )
}

export default Home
