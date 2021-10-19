import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className="card text-center">
  <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
      <Link to="home">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="home">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="home">Home</Link>
      </li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">More Information Please Contract Us</h5>
    <p className="card-text">Our help and support center 24hrs open.</p>
    <Link to="register"  className="btn btn-primary">Please Register</Link>
  </div>
</div>
            <h2>Contract us: 01846121538</h2>
        </div>
    );
};

export default Contact;