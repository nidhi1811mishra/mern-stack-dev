import React from 'react'
import { NavLink } from 'react-router-dom'
import useAppContext from '../AppContext'

const Navbar = () => {
  const {loggedin, logout }=useAppContext();
   
  const showOption =()=>{
    if (loggedin ) {
      return(
        <li className='nav-item'>
          <button className='btn btn-danger' onClick={logout}>Logout</button>
        </li>
      )
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
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
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
            </NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Singup 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event">
            Event Handling 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/todo">
            Todo List 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/statemanagement">
            State Management
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/productlist">
            Product List
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/instagram">
            Instagram
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/manageusers">
            Manage User
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/memecreator">
            Meme Creator
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/usingchart">
            Using chart
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/manageproduct">
            Manage Product
          </NavLink>
        </li>

        <li className="nav-item dropdown">
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
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
         {showOption ()}
      </ul>
    
    </div>
  </div>
</nav>

  )
}

export default Navbar