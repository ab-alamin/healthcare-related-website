import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logout} =useAuth();
    return (
        <div className="header">
            <Link to="home">Home</Link>
            <Link to="/Services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <span>{user.displayName} </span>
            {user?.email &&<button onClick={logout}>Log Out</button>}
            
        </div>
    );
};

export default Header;