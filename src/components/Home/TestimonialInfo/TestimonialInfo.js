import React from 'react';
import './TestimonialInfo.css';

const TestimonialInfo = ({ review }) => {
    const { name, img, description } = review;
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="testimonial-style">
                <div className="d-flex align-items-center">
                    <div>
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                    <div className="ml-2">
                        <h5>{name}</h5>
                    </div>
                </div>
                <small className="text-secondary">{description}</small>
            </div>
        </div>
    );
};

export default TestimonialInfo;