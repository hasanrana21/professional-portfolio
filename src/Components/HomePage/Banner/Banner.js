import React from 'react';
import './Banner.css';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';

const Banner = () => {
    
    return (
        <div className="p-5 row justify-content-evenly align-items-center">
            <Bounce left>
                <div className="col-md-5 banner-text">
                    <h4 className="mb-0">Hello! I'm</h4>
                    <h5>Hasan Rana</h5>
                    <h3>
                    <Typewriter
                        options={{
                            strings: ['Front End Developer', 'MERN Stack Developer', 'Programmer', 'Quick Learner'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </h3>
                    <p>A self-motivated enthusiastic Front End Developer with a deep interest in Javascript. and knowing some frameworks for the Front-End and the Backend. I am good at Javascript, ES6, React, REST API, React Bootstrap, Bootstrap4, HTML5, CSS3. and Familiar with Material UI,Node.js, Express.js, MongoDB, JSON.</p>

                    <div className="social-icon">
                        <a href="mailto:hasanrana178821@gmail.com" target="blank"> <FontAwesomeIcon icon={faEnvelope}/> </a>
                        <a href="https://www.linkedin.com/in/hasan-rana-091803210/" target="blank"> <FontAwesomeIcon icon={faLinkedin}/> </a>
                        <a href="https://github.com/hasanrana21" target="blank"> <FontAwesomeIcon icon={faGithub}/> </a>
                    </div>
                    
                    <Link to="/contact">
                        <button className="btn primary-button">HIRE ME</button>
                    </Link>
                </div>
            </Bounce>
            
            <Rotate bottom right>
                <div className="col-md-7 banner-image">
                    <img src="https://i.ibb.co/ZSmB68h/IMG-20210123-132141.jpg" alt=""/>
                </div>
            </Rotate>
        </div>
    );
};

export default Banner;