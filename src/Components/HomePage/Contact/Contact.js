import React from 'react';
// import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const sendEmail = (e) => {
        
        e.preventDefault();
        emailjs.sendForm('service_kuv2k8p', 'template_1vnoixy', e.target,'user_DOWqgTgdBL8Y7IHaTHFFP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (
        <div className="container-fluid p-5 contact-form">
            <form className="contact-form" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" placeholder="Full Name" required />

                <label>Email</label>
                <input type="email" name="email" placeholder="Your Email" required />

                <label>Message</label>
                <textarea name="message" id="message" placeholder="Your Message" className="ps-3 pt-2" cols="43" rows="7" required></textarea>


                <input type="submit" value="Submit" />
                <p>Sending to <a href="mailto:hasanrana178821@gmail.com" target="blank">hasanrana178821@gmail.com</a></p>
            </form>
            
        </div>
    );
};

export default Contact;