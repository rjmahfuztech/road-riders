import React from 'react';
import rider from '../../../images/rider.JPG';

const OurCompany = () => {
    return (
        <div className="margin">
            <div className="width-maintain">
                <div className="row d-flex align-items-center p-3">
                    <div className="col-md-6 col-12">
                        <img src={rider} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                        <h2 className="mt-3">Read More Awesome News from Our Company</h2>
                        <p className="text-secondary mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, fugiat. Aliquam dicta accusamus corporis vero facilis exercitationem error nihil odit impedit. Distinctio quisquam veniam amet ducimus quam exercitationem necessitatibus delectus.</p>
                        <div className="btn-bg-color mt-4">
                            <button className="btn btn-style text-white">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCompany;