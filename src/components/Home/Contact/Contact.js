import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = e => {
        console.log('submitted');
        e.preventDefault();
    }
    return (
        <div id="contact" className="contact-container margin">
            <div className="text-center text-white mt-3 mb-3">
                <h5><span className="color">CONTACT</span> US</h5>
                <h2>FEEL FREE TO CONTACT US</h2>
            </div>
            <form className="form-style" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="*Enter your name" required />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="*Enter your email" required />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" rows="8" placeholder="*Your message" required></textarea>
                </div>
                <div className="mb-3 text-center">
                    <div className="btn-bg-color">
                        <button className="text-white btn btn-style" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;