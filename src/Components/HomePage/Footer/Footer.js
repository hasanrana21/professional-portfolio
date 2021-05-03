import React from 'react';
import './Footer.css';
import Bounce from 'react-reveal/Bounce';

const Footer = () => {
    return (
        <Bounce bottom>
            <div className="text-center footer">
                <h6>Designer & Developer</h6>
                <a href="https://www.linkedin.com/in/hasan-rana-091803210/" target="blank">Hasan Rana</a> <br/>
                <h5>&copy; 2021 || All Right Reserved</h5>
            </div>
        </Bounce>
    );
};

export default Footer;