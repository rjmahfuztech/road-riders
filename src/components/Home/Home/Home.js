import React from 'react';
import Contact from '../Contact/Contact';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <>
            <Container>
                <Header></Header>
                {/* <Contact></Contact> */}
                <Blog></Blog>
            </Container>
        </>
    );
};

export default Home;