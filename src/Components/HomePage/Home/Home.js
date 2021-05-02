import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import ContactSample from '../ContactSample/ContactSample';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <div className="pt-5">
                <h2 className="mt-5 pt-5 text-center heading">Some of <span>My Article</span></h2>
                <Blogs></Blogs>
                <ContactSample></ContactSample>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;