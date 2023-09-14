import React from 'react'
import './navbar.css';


import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid ">
    <div className='nav_border'>
      <img className='logo' src="https://cdn0.iconfinder.com/data/icons/mobile-device/512/uppercase-latin-letter-round-n-keyboard-2-512.png" alt="" />
    <a className="navbar-brand" href="#">
     Portfolio
    </a>
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
            </NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
          About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/skills">
           Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/work">
            Work 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/experience">
            Experience 
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact me
          </NavLink>
        </li>
       
        
      
        
        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li> */}
            {/* <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li> */}
            {/* <li>
              <hr className="dropdown-divider" />
            </li> */}
            {/* <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li> */}
          {/* </ul> */}
        {/* </li>  */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}

    </div>
    
  </div>
</nav>

  )
}

export default Navbar