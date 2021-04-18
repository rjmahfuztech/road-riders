import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sheared/Sidebar/Sidebar';

const AddReview = () => {
    const [reviewInfo, setReviewInfo] = useState({});
    const [imageURL, setImageURL] = useState(null);

    const submitReview = e => {
        const reviewData = {
            name: reviewInfo.name,
            description: reviewInfo.review,
            img: imageURL
        };

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(result => {
                if (result) {
                    alert("Your review has been successfully completed");
                }
            })
        e.preventDefault();
    }

    const handleUploadImg = e => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '1a22bc8f0079d4bfb66019a7d15dda3e');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleBlur = e => {
        const newReview = { ...reviewInfo };
        newReview[e.target.name] = e.target.value;
        setReviewInfo(newReview);
    }
    return (
        <div className="container margin">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h2 className="mb-5">Review Us</h2>
                    <form onSubmit={submitReview}>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label className="form-label">Name</label>
                                <input onBlur={handleBlur} name="name" type="text" className="form-control" placeholder="Your name" required />
                            </div>
                            <div className="mb-3 col-md-4">
                                <label className="form-label">Your Image</label>
                                <label htmlFor="file-style" className="text-center form-control">Upload Image</label>
                                <input type="file" id="file-style" onChange={handleUploadImg} className="d-none" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-10">
                                <label className="form-label">Your review</label>
                                <textarea onBlur={handleBlur} name="review" className="form-control" rows="6" placeholder="Review us" required></textarea>
                            </div>
                        </div>
                        <div className="mb-3 text-right col-md-10">
                            <div className="btn-bg-color">
                                <button type="submit" className="btn text-white btn-style">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;