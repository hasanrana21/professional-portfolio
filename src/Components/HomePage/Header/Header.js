import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar px-5 py-0 navbar-expand-lg header">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><h1 className="logo">H</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav menu">
                            <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/about" className="nav-link" >About</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/projects" className="nav-link" >Projects</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/blogs" className="nav-link" >Blogs</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/contact" className="nav-link" >Contact</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="" className="nav-link" >RESUME</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;