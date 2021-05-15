import React from 'react';
import './Footer.css';
import Bounce from 'react-reveal/Bounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <Bounce bottom>
            <div className="text-center footer mt-5 pt-3">
                <h6>Designer & Developer</h6>
                <a href="https://www.linkedin.com/in/hasan-rana-091803210/" target="blank">Hasan Rana</a> <br/>

                <div className="social-icon">
                        <a href="mailto:hasanrana178821@gmail.com" target="blank"> <FontAwesomeIcon icon={faEnvelope}/> </a>
                        <a href="https://www.linkedin.com/in/hasan-rana-091803210/" target="blank"> <FontAwesomeIcon icon={faLinkedin}/> </a>
                        <a href="https://github.com/hasanrana21" target="blank"> <FontAwesomeIcon icon={faGithub}/> </a>
                        <a href="https://www.facebook.com/profile.php?id=100010086906679" target="blank"> <FontAwesomeIcon icon={faFacebook}/> </a>
                        <a href="https://www.instagram.com/mr_hr_hasan/" target="blank"> <FontAwesomeIcon icon={faInstagram}/> </a>
                </div>

                <h5>&copy; 2021 <span style={{fontSize: '17px'}}>||</span> All Right Reserved</h5>
            </div>
        </Bounce>
    );
};

export default Footer;