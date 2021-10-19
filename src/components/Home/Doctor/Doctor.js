import React from 'react';

const Doctor = ({doctor}) => {
    const {name, img, expert} = doctor;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{expert}</h5>
        </div>
    );
};

export default Doctor;