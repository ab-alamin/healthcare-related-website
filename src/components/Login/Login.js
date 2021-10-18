import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => { 
    const {signInUsinggoogle,signInUsingGithub} = useAuth();

    return (
        <div>
            <h2>Please log In</h2>
            <button onClick={signInUsinggoogle}>Google Sign In</button>
            <br />
            <button onClick={signInUsingGithub}>Github Sign In</button>
            <br />
            <Link to="/register">New Register?</Link>
        </div>
    );
};

export default Login;