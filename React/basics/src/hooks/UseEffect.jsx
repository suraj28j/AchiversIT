import React from 'react'
import { useEffect, useState } from 'react'

const UseEffect = () => {
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

        <div className='container mt-4'>


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

export default UseEffect


/*
  Syntax:
  useEffect(()=>{}, dependencies)
  => Use effect hook is used to handle side effect in React functional component. Whenever component loads or renders the useEffect hook will run for one time minimum. and If any state change in component it will run again. To ignore this effect we use dependencies.
  => UseEffect hook will take two parameters: 1. CB function 2. Dependencies
  => CB function: It will handle all the side effects. (Example: API calls, Pagination, Toggle etc)
  => Dependencies: Based on dependencies we will call the effect hook.
  => In dependencies we can have two types => [], [state]
  => [] => When we pass empty array as an dependency the useEffect hook will run only one time when component renders.
  => [state]=>(state inside an array)=> When we pass any state inside an array as an dependency the useEffect hook will run whenever that particular state changes.
  */