import React, { Component } from 'react'
import { key } from '../hooks/key';

class UpdatingPhase extends Component {
    state = {
        userData: [],
        pageNumber: 1,
    };

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        let data = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
            {
                method: 'GET',
                headers: {
                    "app-id": key,
                }
            });
        let res = await data.json();
        // console.log(res.data);
        this.setState({ userData: res.data })
    }

    handleButton = (page) => {
        this.setState({ pageNumber: page })
    }

    componentDidUpdate(prevsProps, prevsState) {
        if (prevsState.pageNumber !== this.state.pageNumber) {
            this.getData();
        }
    }

    render() {
        return (
            <div className='container text-center mt-4'>
                <h2>Updating Phase</h2>
                {
                    this.state.userData.length ? (<div className='row g-2 m-4'>
                        {
                            this.state.userData.map((user) => (
                                <div className='col-md-5 d-flex border p-2 me-2'>
                                    <img src={user.picture} alt={user.firstName} />
                                    <div className='ms-4'>
                                        <p>{user.id}</p>
                                        <h6>{user.title} {user.firstName} {user.lastName}</h6>
                                    </div>
                                </div>
                            ))
                        }
                    </div>) : (<div>Loading...</div>)
                }
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <button className='btn btn-primary ms-1' onClick={() => this.handleButton(num)}>{num}</button>
                    ))
                }
            </div>
        )
    }
}

export default UpdatingPhase



/*
    => static getDerivedStateFromProps
    => shouldComponentUpdate
    => render
    => getSnapShotBeforeUpdate
    => componentDidUpdate  // 3 parameters ( previousProp, previousState, getSnapShotBeforeUpdate )

*/