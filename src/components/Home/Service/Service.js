import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, fee, description, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>Name:{name}</h3>
            <h5>Fee:{fee}</h5>
            <p>Description:{description}</p>
        </div>
    );
};

export default Service;