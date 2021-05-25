import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Header = ({ user }) => {
    const handleLogout = async () => {
        const response = await fetch(`${process.env.BASE_URL}/users/logout`, {
            method: 'GET',
            credentials: 'include',
        });
        const res = await response.json();
        alert(res.message);
    };

    if (user) {
        return (
            <header>
                <Link to="/">Home</Link>
                <a href="/login" onClick={handleLogout}>
                    Logout
                </a>
            </header>
        );
    } else {
        return (
            <header>
                <Link to="/">Home</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
            </header>
        );
    }
};

Header.propTypes = {};
