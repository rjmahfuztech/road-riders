import React, { useEffect, useState } from 'react';
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';


const Testimonial = () => {
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviewData(data));
    }, []);
    console.log(reviewData);
    return (
        <div>
            <div className="text-center margin">
                <h5><span className="color">OUR</span> TESTIMONIAL</h5>
                <h2>WHAT OUR CLIENTS SAY</h2>
            </div>
            <div className="width-maintain">
                <div className="row p-3">
                    {
                        reviewData.map(review => <TestimonialInfo key={review._id} review={review}></TestimonialInfo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;