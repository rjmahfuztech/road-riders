import React from "react";
import rider from "../../../images/rider.JPG";
import Fade from "react-reveal/Fade";

const OurCompany = () => {
  return (
    <div id="about" className="margin">
      <Fade duration={2200} bottom>
        <div className="width-maintain">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-12">
              <img src={rider} className="img-fluid rounded" alt="" />
            </div>
            <div className="col-md-6 col-12">
              <h5 className="mt-2 h5-color">
                <span className="color">ABOUT</span> COMPANY
              </h5>
              <h3 className="mt-2">Read more awesome news from our company</h3>
              <p className="text-secondary mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident quis repellat eum aliquam vel, fuga ex doloribus
                repudiandae temporibus eligendi mollitia accusamus quam saepe
                dolores cumque odit, adipisci laboriosam eos rerum nemo fugiat,
                dolore veritatis quasi accusantium. Ducimus, exercitationem
                fugit!
              </p>
              <div className="btn-bg-color mt-4">
                <button className="btn btn-style text-white">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default OurCompany;
