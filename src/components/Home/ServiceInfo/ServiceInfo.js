import React from 'react';
import { useHistory } from 'react-router';
import './ServiceInfo.css';

const ServiceInfo = ({ service }) => {
    const { title, price, image, _id, description } = service;
    const history = useHistory();

    const handleClick = (id) => {
        const url = `/book/${id}`;
        history.push(url);
    }
    
    return (
        <div className="col-md-4 col-12 col-sm-6 text-center">
            <div onClick={() => handleClick(_id)} className="service-info-card">
                <img style={{ height: '80px' }} src={`data:image/jpeg;base64,${image.img}`} alt="" />
                <h5>{title}</h5>
                <h5>${price}</h5>
                <small className="text-secondary">{description}</small>
            </div>
        </div>
    );
};

export default ServiceInfo;
