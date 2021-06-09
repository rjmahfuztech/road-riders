import React, {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import ServiceInfo from "../ServiceInfo/ServiceInfo";

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
      <div className="text-center margin">
        <h5>
          <span className="color">OUR</span> SERVICE
        </h5>
        <h2>SERVICES WE PROVIDE</h2>
      </div>
      <div className="width-maintain">
        <div className="text-center">
          {serviceData.length === 0 && (
            <Spinner animation="border" variant="success" />
          )}
        </div>
        <div className="row p-3">
          {serviceData.map((service, index) => (
            <ServiceInfo key={index} service={service}></ServiceInfo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
