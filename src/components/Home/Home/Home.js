import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Blog from '../Blog/Blog';
import Rider from '../Rider/Rider';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Service></Service>
            <Blog></Blog>
            <Rider></Rider>
            <Contact></Contact>
        </div>
    );
};

export default Home;