import React from 'react';
import './HeaderMain.css';
import buildCycle from '../../../images/makingPartOfCycle.JPG';
import Zoom from 'react-reveal/Zoom';

const HeaderMain = () => {
    return (
        <div className="overflow-hidden">
            <Zoom>
                <div className="row mt-5 header-main-container justify-content-center align-items-center">
                    <div className="col-md-5 offset-md-1 mb-3 text-white">
                        <h1><span className="color">BEST CYCLING</span> EXPERIENCE</h1>
                        <Zoom left cascade>
                            <p>BECOME THE WORLD LEADER ON THE INTERNET FOR THE SPORT OF CYCLING.</p>
                        </Zoom>
                        <div className="btn-bg-color">
                            <button className="btn text-white btn-style">GET SERVICES</button>
                        </div>
                    </div>
                    <div className="col-md-5 image-style">
                        <img src={buildCycle} className="img-fluid" alt="" />
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default HeaderMain;