import React from 'react';
import './Projects.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

const Projects = () => {
    return (
        <>
            <h2 className="pt-5 container-fluid text-center heading">Some of <span>My Projects</span></h2>
            <div className="row project-section align-items-center container-fluid pt-5">
                <div className="col-md-6 project-slider ps-5">
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        }} pagination={{
                        "clickable": true
                        }} navigation={true} className="mySwiper slide">
                        <SwiperSlide> <img src="https://i.ibb.co/f0Jv2Bf/Screenshot-2020-12-29-free-Code-Camp-org.png" alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src="https://i.ibb.co/f0Jv2Bf/Screenshot-2020-12-29-free-Code-Camp-org.png" alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src="https://i.ibb.co/f0Jv2Bf/Screenshot-2020-12-29-free-Code-Camp-org.png" alt=""/> </SwiperSlide>
                        
                    </Swiper>
                </div>
                <div className="col-md-6 project-info">
                    <span>01</span>
                    <h4>Flash Shoots Photography</h4>
                    <p>It is an agency website, which serves some services like web development, graphics design, mobile application design, photography etc. All the facilities of this website are listed here:</p>
                    
                    <div className="technology-tag">
                        <button>React.js</button>
                        <button>Node.js</button>
                        <button>Express.js</button>
                        <button>MongoDB</button>
                        <button>Stripe</button>
                        <button>Firebase</button>
                    </div>
                    <div className="social-icon project-icon">
                        <a href="https://flash-shoots-complitesite-by-hasan.netlify.app/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                        <a href="https://github.com/hasanrana21/flash-shoots-client" target="blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>
            </div>

            <div className="row project-section align-items-center container-fluid pt-5">
                <div className="col-md-6 project-slider ps-5">
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        }} pagination={{
                        "clickable": true
                        }} navigation={true} className="mySwiper slide">
                        <SwiperSlide> <img src="https://i.ibb.co/f0Jv2Bf/Screenshot-2020-12-29-free-Code-Camp-org.png" alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src="https://i.ibb.co/f0Jv2Bf/Screenshot-2020-12-29-free-Code-Camp-org.png" alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src="https://i.ibb.co/f0Jv2Bf/Screenshot-2020-12-29-free-Code-Camp-org.png" alt=""/> </SwiperSlide>
                        
                    </Swiper>
                </div>
                <div className="col-md-6 project-info">
                    <span>01</span>
                    <h4>Flash Shoots Photography</h4>
                    <p>It is an agency website, which serves some services like web development, graphics design, mobile application design, photography etc. All the facilities of this website are listed here:</p>
                    
                    <div className="technology-tag">
                        <button>React.js</button>
                        <button>Node.js</button>
                        <button>Express.js</button>
                        <button>MongoDB</button>
                        <button>Stripe</button>
                        <button>Firebase</button>
                    </div>
                    <div className="social-icon project-icon">
                        <a href="https://flash-shoots-complitesite-by-hasan.netlify.app/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                        <a href="https://github.com/hasanrana21/flash-shoots-client" target="blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>
            </div>

            <div className="row project-section align-items-center container-fluid pt-5">
                <div className="col-md-6 project-slider ps-5">
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        }} pagination={{
                        "clickable": true
                        }} navigation={true} className="mySwiper slide">
                        <SwiperSlide> <img src="https://i.ibb.co/f0Jv2Bf/Screenshot-2020-12-29-free-Code-Camp-org.png" alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src="https://i.ibb.co/f0Jv2Bf/Screenshot-2020-12-29-free-Code-Camp-org.png" alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src="https://i.ibb.co/f0Jv2Bf/Screenshot-2020-12-29-free-Code-Camp-org.png" alt=""/> </SwiperSlide>
                        
                    </Swiper>
                </div>
                <div className="col-md-6 project-info">
                    <span>01</span>
                    <h4>Flash Shoots Photography</h4>
                    <p>It is an agency website, which serves some services like web development, graphics design, mobile application design, photography etc. All the facilities of this website are listed here:</p>
                    
                    <div className="technology-tag">
                        <button>React.js</button>
                        <button>Node.js</button>
                        <button>Express.js</button>
                        <button>MongoDB</button>
                        <button>Stripe</button>
                        <button>Firebase</button>
                    </div>
                    <div className="social-icon project-icon">
                        <a href="https://flash-shoots-complitesite-by-hasan.netlify.app/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                        <a href="https://github.com/hasanrana21/flash-shoots-client" target="blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;