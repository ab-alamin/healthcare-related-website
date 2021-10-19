import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className="card text-center">
  <div className="card-header">
  </div>
  <div className="card-body">
    <h5 className="card-title">More Information Please Contract Us</h5>
    <p className="card-text">Our help and support center 24hrs open.</p>
    <Link to="register"  className="btn btn-primary">Please Register</Link>
  </div>
</div>
            <h2 className="mt-20">Contract us: 01846121538</h2>
        </div>
    );
};

export default Contact;