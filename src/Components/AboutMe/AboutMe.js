import React from 'react';
import './AboutMe.css';
import Slide from 'react-reveal/Slide';

const AboutMe = () => {
    return (
        <div className= "row container-fluid m-5 about">
            <div className="col-md-6 about-left">
                <Slide left>
                    <div className="about-image text-center mb-4">
                        <img className="img-fluid"  src="https://i.ibb.co/WK7dkKx/IMG-1556.jpg" alt=""/>
                    </div>
                </Slide>
                <Slide right>
                    <p>Hello there,<br/>
                    This is Hasan Rana.I'm Jr. Front End Developer.I have knowledge of JavaScript, ES6, React.JS, Node.JS, Mongo Db, HTML, CSS, Bootstrap,  Firebase, Heroku, and Netlify. I also have knowledge of Communication and Quick Learning Skills. I think I would be a proper candidate for the Jr. Front End Developer position.When I was learning web development I always tried to do those things carefully. If I have made any mistake in any project I solve it easily because I have the Patience and problem-solving experience.
                    </p>
                </Slide>
            </div>

            <Slide bottom>
                <div className="col-md-6 about-right project-info container-fluid">
                    <h2 className="heading text-center">Some of My <span>Skills</span></h2>
                    <div className="technology-tag">
                        <h4>Front End</h4>
                        <button>Javascript</button>
                        <button>ES6</button>
                        <button>React.js</button>
                        <button>Stripe</button>
                        <button>Firebase</button>
                        <button>HTML5</button>
                        <button>CSS3</button>
                        <button>REST API</button>
                        <button>React Bootstrap</button>
                        <button>Bootstrap4</button>
                        <button>Material UI</button>
                    </div>
                    <div className="technology-tag">
                        <h4>Backend</h4>
                        <button>Node.js</button>
                        <button>Express.js</button>
                        <button>MongoDB</button>
                        <button>JSON</button>
                    </div>
                    <div className="technology-tag">
                        <h4>Familiar</h4>
                        <button>Redux</button>
                        <button>React Native</button>
                        <button>Wordpress Customization</button>
                    </div>
                    <div className="technology-tag">
                        <h4>Tools</h4>
                        <button>Git</button>
                        <button>NPM</button>
                        <button>Webpack</button>
                        <button>Chrome Dev Tool</button>
                        <button>Firebase</button>
                        <button>Netlify</button>
                        <button>Heroku</button>
                        <button>VS Code</button>
                        <button>Create React App</button>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default AboutMe;