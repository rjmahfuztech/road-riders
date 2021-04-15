import React from 'react';
import './HeaderMain.css';
import buildCycle from '../../../images/makingPartOfCycle.JPG';

const HeaderMain = () => {
    return (
        <div className="row d-flex mt-5 header-main-container align-items-center">
            <div className="col-md-5 offset-md-1 mb-3 text-white">
                <h1>BEST CYCLING EXPERIENCE</h1>
                <p>BECOME THE WORLD LEADER ON THE INTERNET FOR THE SPORT OF CYCLING.</p>
                <button className="button button-style">Get Services</button>
            </div>
            <div className="col-md-5 image-style">
                <img src={buildCycle} className="img-fluid w-100" alt="" />
            </div>
        </div>
    );
};

export default HeaderMain;