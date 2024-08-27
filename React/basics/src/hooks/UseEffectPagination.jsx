import React, { useState, useEffect } from 'react'
import { key } from './key'


const UseEffectPagination = () => {
    const [user, setUser] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getData()
    }, [page]);

    let getData = async () => {
        let data = await fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=10`,
            {
                method: 'GET',
                headers: {
                    "app-id": key,
                }
            });
        let res = await data.json();
        console.log(res.data);
        setUser(res.data)
    }

    const buttonHandler = (pageNo) => {
        setPage(pageNo);
    }
    return (
        <div className='container'>
            <div className='row'>
                <h3 className='mt-2 text-center'>Pagination</h3>
                <div className='col-md-3'></div>
                <div className='col-md-6 mb-4'>
                    {
                        user.length ? (
                            <div className='table-responsive'>
                                <table className="table table-border">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col" className="border">Picture</th>
                                            <th scope="col" className="border">Id</th>
                                            <th scope="col" className="border">Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            user.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="border">
                                                        <img src={item.picture} alt={item.id} className='img-fluid border' />
                                                    </td>
                                                    <td className="border">{item.id}</td>
                                                    <td className="border">
                                                        {item.title} {item.firstName} {item.lastName}
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className='mt-4 mb-4 text-center'>
                                <h2>Loading...</h2>
                            </div>
                        )
                    }
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                            <button className='btn btn-primary ms-2' onClick={() => buttonHandler(num)}>{num}</button>
                        ))
                    }
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    )
}

export default UseEffectPagination
