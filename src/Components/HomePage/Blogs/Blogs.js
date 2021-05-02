import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../../FakeData/BlogsData/BlogsData.json';
import BlogsCart from '../BlogsCart/BlogsCart';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        console.log(blogsData)
        setBlogs(blogsData);
    }, [])
    return (
        <>
            <div className="row container-fluid p-5">
                
                {
                    blogs.map(blog => <BlogsCart blog={blog}></BlogsCart>)
                }
            </div>
        </>
    );
};

export default Blogs;