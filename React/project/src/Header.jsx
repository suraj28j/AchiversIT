import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg  shadow p-3 mb-5 bg-white rounded">

                <div className="container-fluid">

                    <img src={logo} alt='logo' className="navbar-brand ms-4" style={{ height: '70px' }} />

                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ms-auto">
                            <li>
                                <Link className="dropdown-item nav-link me-4" to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item nav-link me-4" to='/shop'>Shop</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item nav-link me-4" to='/cart'>Cart</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item nav-link me-4" to='/user'><i class="bi bi-person-fill"></i></Link>
                            </li>
                            <li>
                                <Link className="dropdown-item nav-link me-4" to='/usercart'>
                                <i class="bi bi-cart-fill"></i><span className="bg-info p-1 rounded-circle position-absolute translate-middle text-center" style={{ width: '25px', height: '25px', lineHeight: '18px' }}>0</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>

        </>
    )
}

export default Header