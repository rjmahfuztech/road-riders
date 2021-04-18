import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';


const Testimonial = () => {
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-cliffs-04770.herokuapp.com/review')
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
                <div className="text-center">
                    {
                        reviewData.length === 0 && <Spinner animation="border" variant="success" />
                    }
                </div>
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