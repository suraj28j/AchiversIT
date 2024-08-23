import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='sticky-top'>
            <nav className='navbar navbar-expand-lg p-1 shadow p-3 bg-white rounded'>
                <img className='navbar-brand' src={logo} alt='log' />
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarcollapse'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarcollapse'>
                    <ul className='navbar-nav ms-auto me-4'>
                        <li className="navbar-item me-4">
                            <Link className='nav-link active' to='/'>Home</Link>
                        </li>
                        <li className="navbar-item me-4">
                            <Link className='nav-link active' to='/shop'>Shop</Link>
                        </li>
                        <li className="navbar-item me-4">
                            <Link className='nav-link active' to='/cart'>Cart</Link>
                        </li>
                        <li className="navbar-item me-4">
                            <Link className='nav-link' to='/user'><i className="bi bi-person-fill"></i></Link>
                        </li>
                        <li className="navbar-item">
                            <Link className='nav-link'><i className="bi bi-cart-fill"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header