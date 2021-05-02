import React from 'react';
import './Banner.css';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Banner = () => {
    return (
        <div className="p-5 row justify-content-evenly align-items-center">
            <div className="col-md-5 banner-text">
                <h4 className="mb-0">Hello! I'm</h4>
                <h5>Hasan Rana</h5>
                <h3>
                <Typewriter
                    options={{
                        strings: ['Front End Developer', 'Programmer', 'Quick Learner'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </h3>
                <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>

                <div className="social-icon">
                    <span> <FontAwesomeIcon icon={faEnvelope}/> </span>
                    <span> <FontAwesomeIcon icon={faLinkedin}/> </span>
                    <span> <FontAwesomeIcon icon={faGithub}/> </span>
                </div>
                
                    <button type="button" className="primary-button">HIRE ME</button>
            </div>

            <div className="col-md-7 banner-image">
                <img src="https://i.ibb.co/ZSmB68h/IMG-20210123-132141.jpg" alt=""/>
            </div>
        </div>
    );
};

export default Banner;