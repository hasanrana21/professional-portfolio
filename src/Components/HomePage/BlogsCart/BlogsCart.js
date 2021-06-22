import React from 'react';
import './BlogsCart.css';
import Slide  from 'react-reveal/Slide';

const BlogsCart = (props) => {
    const { blog_name, image, URL } = props.blog;
    return (
        <Slide bottom>
            <div className="col-md-4 blogs-card">
                <img className="img-fluid"  src={image} alt=""/>
                <div className="blog-card-text">
                    <a href={URL} target="blank">
                        <h5>{blog_name}</h5>   
                    </a>
                </div>
            </div>
        </Slide>
    );
};

export default BlogsCart;