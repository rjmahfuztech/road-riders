import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Blog from '../Blog/Blog';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import OurCompany from '../OurCompany/OurCompany';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="container-fluid">
                <Service></Service>
                <Blog></Blog>
                <OurCompany></OurCompany>
                <Testimonial></Testimonial>
            </div>
            <Contact></Contact>
            <div className="container-fluid">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;