import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ServiceInfo from "../ServiceInfo/ServiceInfo";
import Fade from "react-reveal/Fade";

const Service = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-cliffs-04770.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  console.log(serviceData);
  return (
    <div id="service">
      {serviceData.length === 0 ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <div>
          <Fade>
            <div className="text-center margin">
              <h5>
                <span className="color">OUR</span> SERVICE
              </h5>
              <h2>SERVICES WE PROVIDE</h2>
            </div>
          </Fade>
          <div className="width-maintain">
            <div className="row">
              {serviceData.map((service, index) => (
                <ServiceInfo key={index} service={service}></ServiceInfo>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
