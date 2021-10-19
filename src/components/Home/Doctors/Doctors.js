import React from 'react';
import Doctor from '../Doctor/Doctor';
import doctors1 from '../../../images/doctor/Doctors-1.jpg'
import doctors2 from '../../../images/doctor/doctors-2.jpg'
import doctors3 from '../../../images/doctor/Doctors-3.jpg'
import doctors4 from '../../../images/doctor/Doctor-4.jpg'

const doctors = [
    {
        img: doctors1,
        name: 'karbon lil',
        expert: 'sergery',

    },
    {
        img: doctors2,
        name: 'karbon lil',
        expert: 'sergery',

    },
    {
        img: doctors3,
        name: 'karbon lil',
        expert: 'sergery',

    },
    {
        img: doctors4,
        name: 'karbon lil',
        expert: 'sergery',

    },
]

const Doctors = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-5"> Our Doctors</h2>
            <div className="row">
                {
                    doctors.map(doctor =><Doctor
                    key={doctor.name}
                    doctor={doctor}
                    ></Doctor> )
                }

            </div>
        </div>
    );
};

export default Doctors;