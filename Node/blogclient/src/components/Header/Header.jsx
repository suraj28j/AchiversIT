import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import { AuthContext } from '../../context/AuthContext'

const Header = () => {
    const { user, dispatch } = useContext(AuthContext);

    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch({ type: "LOGOUT" })
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={logo} alt='logo' className="navbar-brand" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/createblog">Create Blog</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {
                                user ? (
                                    <>
                                        <Link to = {`/updateuser/${user._id}`}>
                                            <button className='btn me-2'>{user.name}</button>
                                        </Link>
                                        <button className="btn btn-outline-danger" type="submit" onClick={logoutHandler}>
                                            <Link className="nav-link active" aria-current="page" to='/'>Logout</Link>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button className="btn btn-outline-success" type="submit">
                                            <Link className="nav-link active" aria-current="page" to='/login'>Login</Link>
                                        </button>
                                    </>
                                )
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
