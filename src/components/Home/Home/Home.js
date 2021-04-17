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
        <div className="">
            <Header></Header>
            <Service></Service>
            <Blog></Blog>
            <OurCompany></OurCompany>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;