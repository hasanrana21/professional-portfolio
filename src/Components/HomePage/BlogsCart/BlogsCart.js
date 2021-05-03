import React from 'react';
import './BlogsCart.css';
import Flip from 'react-reveal/Flip';

const BlogsCart = (props) => {
    const {blog_name, image, description} = props.blog;
    return (
        <Flip top>
            <div className="col-md-4 blogs-card">
                <img src={image} alt=""/>
                <div className="blog-card-text">
                    <a href="https://hasanrana178821.medium.com/" target="blank">
                        <h5>{blog_name}</h5>   
                    </a>
                    <p>{description}</p>
                </div>
            </div>
        </Flip>
    );
};

export default BlogsCart;