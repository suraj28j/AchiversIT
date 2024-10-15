import React from 'react'
import { BASE_URL } from '../../utils/config'
import useFetch from '../hooks/useFetch'

const Home = () => {
    const{
        data:blogData,
        loading,
        error,
    } = useFetch(`${BASE_URL}/blog/getallblog`);

    // console.log(blogData);
    
  return (
    <>
     {
      blogData.map((item)=>(
        <ul>
        <li>Content : {item.content}</li>
        <li>Title : {item.title}</li>
        <li>Topic : {item.topic}</li>
        </ul>
      ))
     }
      {/* <h2>Home</h2> */}
    </>
  )
}

export default Home
