import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import ContactSample from '../ContactSample/ContactSample';
import ProjectsData from '../ProjectsData/ProjectsData';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
                <ProjectsData></ProjectsData>
            <div className="pt-5">
                <Blogs></Blogs>
                <ContactSample></ContactSample>
            </div>
        </div>
    );
};

export default Home;