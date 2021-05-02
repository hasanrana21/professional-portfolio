import React from 'react';
import './BlogsCart.css';

const BlogsCart = (props) => {
    const {blog_name, image, description} = props.blog;
    return (
        
        <div className="col-md-4 blogs-card">
            <img src={image} alt=""/>
            <div className="blog-card-text">
                <a href="https://hasanrana178821.medium.com/" target="blank">
                    <h5>{blog_name}</h5>   
                </a>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BlogsCart;