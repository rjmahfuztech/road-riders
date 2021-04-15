import React from 'react';
import rider from '../../../images/rider.JPG';

const Rider = () => {
    return (
        <div className="margin">
            <div className="width-maintain">
                <div className="row d-flex align-items-center p-3">
                    <div className="col-md-6 col-12">
                        <img src={rider} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                        <h2 className="mt-3">WHAT RIDERS SAY.</h2>
                        <p className="text-secondary mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, atque quam inventore, veniam ipsam voluptatum aliquam earum, fuga excepturi possimus maiores eligendi nostrum blanditiis obcaecati consequuntur! Architecto accusantium fuga laudantium assumenda. Nulla sit fugit eum voluptate hic dolorem consequatur voluptatibus neque, voluptatum exercitationem nihil mollitia minima tempora. Molestias quo tempore nisi quidem cum officiis, ipsa beatae veniam ipsam animi accusamus eaque quos id aliquam doloribus enim! Nihil quibusdam itaque expedita perspiciatis molestias fugit aut unde laborum, dolorem doloribus. Beatae, animi!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rider;