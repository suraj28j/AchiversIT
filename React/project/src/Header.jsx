import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './images/logo.png'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={logo} alt="logo" className="navbar-brand" href="#" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='nav justify-content-evenly'>  {/* ---- */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item me-4">
                                    <Link className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item me-4">
                                    <Link className="nav-link">Shop</Link>
                                </li>
                                <li className="nav-item me-4">
                                    <Link className="nav-link" href="#">Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link me-4" ><Icon.PersonFill /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link me-4" ><Icon.CartFill /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>  {/* ---- */}
                </div>
            </nav>
        </div>
    )
}

export default Header