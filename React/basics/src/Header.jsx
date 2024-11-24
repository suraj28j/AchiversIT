import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'

const Header = ({ isDarkMode, toggleBackgroundColor }) => {
  const navbarClass = isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light";
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${navbarClass}`}>
        <div className="container-fluid">
          <img src={logo} alt='logo' className="navbar-brand" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/usestate">useState</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/useeffect">useEffect</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/useeffectpagination">UseEffectPagination</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/useref">useRef</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/usereducer">useReducer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/usecontext">useContext</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button className='ms-4 btn btn-dark' onClick={toggleBackgroundColor}>Toggle</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
