import React from 'react';
import './Blog.css';
import blog1 from '../../../images/blog1.JPG';
import blog2 from '../../../images/blog2.JPG';
import blog3 from '../../../images/blog3.JPG';
import BlogInfo from '../BlogInfo/BlogInfo';

const blogData = [
    {
        title: "LIGHTS & MOTION NIGHT LIGHT",
        img: blog1,
        background: "color"
    },
    {
        title: "LIGHTS & MOTION NIGHT LIGHT",
        img: blog2,
        background: "color"
    },
    {
        title: "LIGHTS & MOTION NIGHT LIGHT",
        img: blog3,
        background: "color"
    },
]

const Blog = () => {
    return (
        <div>
            <div className="margin text-center">
                <h5 className="h5-color"><span className="color">OUR</span> BLOG</h5>
                <h2 className="">LATEST FROM BLOG</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row">
                    {
                        blogData.map((blog, index) => <BlogInfo key={index} blog={blog}></BlogInfo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;