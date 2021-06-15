import React from "react";
import "./TestimonialInfo.css";

const TestimonialInfo = ({ review }) => {
  const { img, name, description } = review;

  return (
    <div className="testimonial-style">
      <div className="d-flex align-items-center mb-2">
        <div>
          <img src={img} className="img-fluid" alt="" />
        </div>
        <div className="ms-3">
          <h5>{name}</h5>
        </div>
      </div>
      <small className="text-secondary">{description}</small>
    </div>
  );
};

export default TestimonialInfo;
