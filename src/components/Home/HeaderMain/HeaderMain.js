import React from 'react';
import './HeaderMain.css';
import buildCycle from '../../../images/makingPartOfCycle.JPG';

const HeaderMain = () => {
    return (
        <div className="row d-flex mt-5 header-main-container justify-content-center align-items-center">
            <div className="col-md-5 offset-md-1 mb-3 text-white">
                <h1><span className="color">BEST CYCLING</span> EXPERIENCE</h1>
                <p>BECOME THE WORLD LEADER ON THE INTERNET FOR THE SPORT OF CYCLING.</p>
                <div className="btn-bg-color">
                    <button className="btn text-white btn-style">GET SERVICES</button>
                </div>
            </div>
            <div className="col-md-5 image-style">
                <img src={buildCycle} className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default HeaderMain;