import React from 'react'
import "./Header.css"
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const cart_data = useSelector((state) => state.productData.cartData);
    let cart_data_Length = cart_data.length
    return (
        <header className='sticky-top'>
            <nav className='navbar navbar-expand-lg p-1 shadow p-3 bg-white rounded'>
                <div className='navbar-brand'>
                    <img className='img-fluid' src={logo} alt='logo' />
                </div>
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
                            <Link className='nav-link'>
                                <i className="bi bi-cart-fill"></i>
                                <span className="p-1 rounded-circle position-absolute translate-middle text-center itemsNotify"
                                    style={{ width: '25px', height: '25px', lineHeight: '18px' }}
                                >{cart_data_Length}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header