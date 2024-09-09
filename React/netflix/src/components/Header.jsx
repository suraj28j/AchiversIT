import React from 'react'
import logo from '../Assets/Images/Netflix-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='sticky-top'> 
            <nav className='navbar navbar-expand-lg border'>
                <div className='navbar-brand'>
                    <img className='img-fluid' src={logo} alt='logo' style={{ width: '100px', height: '80px' }} />
                </div>
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarcollapse'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarcollapse'>
                    <ul className='navbar-nav'>
                        <li className="navbar-item me-4">
                            <Link className='nav-link active' to='/'>Home</Link>
                        </li>
                        <li className="navbar-item me-4">
                            <Link className='nav-link active' to='/shop'>TV Shows</Link>
                        </li>
                        <li className="navbar-item me-4">
                            <Link className='nav-link active' to='/cart'>Movies</Link>
                        </li>
                        <li className="navbar-item me-4">
                            <Link className='nav-link active' to='/cart'>New & Popular</Link>
                        </li>
                        <li className="navbar-item me-4">
                            <Link className='nav-link active' to='/cart'>My List</Link>
                        </li>
                        <li className="navbar-item me-4">
                            <Link className='nav-link active' to='/cart'>Browse by Languages</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className="navbar-item me-4">
                            <Link className='nav-link'><i className="bi bi-search"></i></Link>
                        </li>
                        <li className="navbar-item me-4">
                            <Link className='nav-link'><i className="bi bi-bell"></i></Link>
                        </li>
                        <li className="navbar-item me-4">
                            <Link className='nav-link'><i className="bi bi-person-circle"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
