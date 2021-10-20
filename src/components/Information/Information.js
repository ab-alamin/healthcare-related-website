import React from 'react';
import { useParams } from 'react-router';

const Information = () => {
    const {serviceId} = useParams();
    return (
        <div>
           <h2>Dr.Information: {serviceId}</h2>
        </div>
    );
};

export default Information;