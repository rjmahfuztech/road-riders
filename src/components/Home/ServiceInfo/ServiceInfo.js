import React from 'react';
import { useHistory } from 'react-router';
import './ServiceInfo.css';

const ServiceInfo = ({ service }) => {
    const { title, price, image, description } = service;

    const history = useHistory();
    const handleClick = () => {
        console.log('click')
    }
    return (
        <div className="col-md-4 col-12 col-sm-6 text-center">
            <div onClick={handleClick} className="service-info-card">
                <img style={{ height: '80px' }} src={`data:image/jpeg;base64,${image.img}`} alt="" />
                <h5>{title}</h5>
                <h5>${price}</h5>
                <small className="text-secondary">{description}</small>
            </div>
        </div>
    );
};

export default ServiceInfo;
