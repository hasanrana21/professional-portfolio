import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <nav className="navbar px-5 py-0 navbar-expand-lg header">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><h1 className="logo">H</h1></Link>
                    <button className="navbar-toggler mobile-expand-menu" type="" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><FontAwesomeIcon icons={faBars} className="bars"/></span>
                    
                    </button>
                    <Slide right>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav menu">
                                <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/aboutMe" className="nav-link" >About</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/projectsData" className="nav-link" >Projects</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/blogs" className="nav-link" >Blogs</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact</Link>
                                </li>
                                <li className="nav-item mt-2">
                                    <a href='https://drive.google.com/uc?export=download&id=1gJWPMtDCI5bV2tisgwjXkitijCheRIiK' download className="resume" >RESUME</a>
                                </li>
                            </ul>
                        </div>
                    </Slide>
                </div>
            </nav>
        </div>
    );
};

export default Header;