/* eslint-disable max-len */
import React from 'react';
import { useSignup } from '../hooks/useSignup';

export const SignupContainer = () => {
    const {
        email,
        password,
        username,
        handleSubmit,
        handleUsernameChange,
        handleEmailChange,
        handlePasswordChange,
    } = useSignup();
    
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <input
                        type="text"
                        id="username"
                        onChange={handleUsernameChange}
                        value={username}
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input
                        type="text"
                        id="email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        type="text"
                        id="password"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                </label>
                <button>Sign Up</button>
            </form>
        </div>
    );
};
