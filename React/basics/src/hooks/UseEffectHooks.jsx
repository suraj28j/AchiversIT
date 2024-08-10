import React from 'react'
import { useEffect, useState } from 'react'

const UseEffectHooks = () => {
    let [state, setState] = useState([])
    useEffect(() => {
        getData();
    }, [])
    let getData = async () => {
        let data = await fetch(`https://jsonplaceholder.typicode.com/users`);
        let res = await data.json();
        setState(res);
    }
    return (
        // console.log(state)

        <div className='conatiner mt-4'>


        <table className='table table-bordered table-hover text-center'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((items) => (
                        <tr key={items.id}>
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.username}</td>
                            <td>{items.email}</td>
                            <td>{items.address.city}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

        </div> 
    )
}

export default UseEffectHooks
