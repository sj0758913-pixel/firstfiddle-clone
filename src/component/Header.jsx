import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className="navbar bg-danger navbar-dark navbar-expand-md fixed-top">
                <div className="container-fluid vv">
                    <a href="" className="navbar-brand">
                        <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt=""
                        className="weblogo"/>
                    </a>
                    <button className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className='navbar-toggler-icon'></span>
          </button>


                    <div className=" navbar-collapse collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li><Link to="/about" className="nav-link">About</Link></li>
                            <li><Link to="/brand" className="nav-link">Brand</Link></li>
                            <li><Link to="/ourteam" className="nav-link">Ourteam</Link></li>
                            <li><Link to="/contact" className="nav-link">Conatct</Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Header
