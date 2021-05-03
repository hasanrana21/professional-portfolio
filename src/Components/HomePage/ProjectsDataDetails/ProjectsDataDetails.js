import React from 'react';
import './ProjectsDataDetails.css';
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
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


const ProjectsDataDetails = (props) => {
    const { id, project_name, project_details, image1, image2, image3, image4 } = props.project;
    return (
        <>
            <div className="row project-section align-items-center container-fluid pt-5">
                <Slide left>
                    <div className="col-md-6 project-slider container-fluid">
                        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                            }} pagination={{
                            "clickable": true
                            }} navigation={true} className="mySwiper slide">
                            <SwiperSlide> <img className="img-fluid"  src={image1} alt=""/> </SwiperSlide>
                            <SwiperSlide> <img className="img-fluid"  src={image2} alt=""/> </SwiperSlide>
                            <SwiperSlide> <img className="img-fluid"  src={image3} alt=""/> </SwiperSlide>
                        </Swiper>
                    </div>
                </Slide>

                <Rotate bottom right>
                    <div className="col-md-6 project-info container-fluid">
                        <span style={{color: 'lightgrey'}}>{id}</span>
                        <h4>{project_name}</h4>
                        <p>{project_details}</p>
                        
                        {id === 1 ?
                        <div>
                            <div className="technology-tag">
                                <button>React.js</button>
                                <button>Node.js</button>
                                <button>Express.js</button>
                                <button>MongoDB</button>
                                <button>Stripe</button>
                                <button>Bootstrap</button>
                                <button>Firebase</button>
                            </div>
                            <div className="social-icon project-icon my-3">
                                <a href="https://flash-shoots-complitesite-by-hasan.netlify.app/" target="blank"><span>Live</span><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                                <a href="https://github.com/hasanrana21/flash-shoots-client" target="blank"><span>GitHub</span><FontAwesomeIcon icon={faGithub}/></a>
                            </div>
                        </div>
                        :
                        id === 2 ?
                        <div>
                            <div className="technology-tag">
                                <button>React.js</button>
                                <button>Node.js</button>
                                <button>Express.js</button>
                                <button>MongoDB</button>
                                <button>Material UI</button>
                                <button>Bootstrap</button>
                                <button>Firebase</button>
                            </div>
                            <div className="social-icon project-icon my-3">
                                <a href="https://laptop-village-fullstack-assignment10.netlify.app/" target="blank"><span>Live</span><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                                <a href="https://github.com/hasanrana21/laptop-village-client" target="blank"><span>GitHub</span><FontAwesomeIcon icon={faGithub}/></a>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="technology-tag">
                                <button>React.js</button>
                                <button>Node.js</button>
                                <button>Express.js</button>
                                <button>MongoDB</button>
                                <button>Bootstrap</button>
                                <button>Firebase</button>
                            </div>
                            <div className="social-icon project-icon my-3">
                                <a href="https://dining-out-fullstack-by-hasan.netlify.app/" target="blank"><span>Live</span><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                                <a href="https://github.com/hasanrana21/dining-out-hot-onion--full-stack-project" target="blank"><span>GitHub</span><FontAwesomeIcon icon={faGithub}/></a>
                            </div>
                        </div>
                        
                    }
                    </div>
                </Rotate>
            </div>
        </>
    );
};

export default ProjectsDataDetails;