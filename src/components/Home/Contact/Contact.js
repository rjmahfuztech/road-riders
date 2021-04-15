import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = e => {
        console.log('submitted');
        e.preventDefault();
    }
    return (
        <div className="contact-container">
            <h5 className="text-center">Contact With Us</h5>
            <form className="form-style" onClick={handleSubmit}>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" rows="8"></textarea>
                </div>
                <div className="mb-3 text-center">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;