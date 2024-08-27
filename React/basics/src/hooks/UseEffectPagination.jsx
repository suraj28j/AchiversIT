import React, { useState, useEffect } from 'react'
import key from './key'

const UseEffectPagination = () => {
    const [user, setUser] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getData()
    }, [page]);

    let getData = async () => {
        let data = await fetch(`https://dummyapi.io/data/v1/user?${page}&limit=10`,{
            method:'GET',
            headers:{
                'api-id':key
            }
        });
        let res = await data.json();
        setUser(res)
    }
    return (
        <div className='container'>
            <div className='row'>
                <h3 className='mt-2 text-center'>Pagination</h3>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    {
                        user.map((item)=>(
                            <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Picture</th>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                            </tr>
                        </tbody>
                    </table>
                        ))
                    }
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    )
}

export default UseEffectPagination
