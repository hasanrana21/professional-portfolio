import React from 'react';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';

const ContactSample = () => {
    return (
        <Bounce right>
            <div className="contact-button text-center py-5 my-5">
                <h2 className="heading">Stay <span>Connected</span></h2>
                <p>Hi! Mr/ms I'd love to hear from you.If you have any question or just want <br/> to say hello, feel free drop a message.I will try to response as soon as possible.</p>
                
                <Link to="/contact">
                    <button className="btn primary-button my-5">Say Hello</button>
                </Link>
            </div>
        </Bounce>
    );
};

export default ContactSample;