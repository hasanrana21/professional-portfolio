import React from 'react';
import './BlogsCart.css';
import Flip from 'react-reveal/Flip';

const BlogsCart = (props) => {
    const {blog_name, image, description, URL} = props.blog;
    return (
        <Flip top>
            <div className="col-md-4 blogs-card">
                <img className="img-fluid"  src={image} alt=""/>
                <div className="blog-card-text">
                    <a href={URL} target="blank">
                        <h5>{blog_name}</h5>   
                    </a>
                    <p> <small>{description}</small> </p>
                </div>
            </div>
        </Flip>
    );
};

export default BlogsCart;