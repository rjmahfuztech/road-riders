import React from "react";
import "./Blog.css";
import blog1 from "../../../images/blog1.JPG";
import blog2 from "../../../images/blog2.JPG";
import blog3 from "../../../images/blog3.JPG";
import BlogInfo from "../BlogInfo/BlogInfo";
import Fade from "react-reveal/Fade";

const blogData = [
  {
    title: "LIGHTS & MOTION NIGHT LIGHT",
    img: blog1,
  },
  {
    title: "SURVIVE LONG BIKE ROAD TRIPS",
    img: blog2,
  },
  {
    title: "A BRIEF HISTORY OF BICYCLING",
    img: blog3,
  },
];

const Blog = () => {
  return (
    <div id="blog">
      <Fade duration={2200} bottom>
        <div className="margin text-center">
          <h5 className="h5-color">
            <span className="color">OUR</span> BLOG
          </h5>
          <h2>LATEST FROM BLOG</h2>
        </div>
      </Fade>
      <div className="width-maintain">
        <div className="row">
          {blogData.map((blog, index) => (
            <BlogInfo key={index} blog={blog}></BlogInfo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
