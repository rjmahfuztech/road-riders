import React from 'react';
import './Header.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div className="header-container">
            <NavigationBar></NavigationBar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;