/* eslint-disable max-len */
import React, { useState } from 'react';
import { useHistory } from 'react-router';

export const LoginContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        };
        try {
            const user = await fetch(`${process.env.BASE_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                credentials: 'include'
            });
            const userJson = await user.json();
            alert(`Logged in as ${userJson.username}`);
            history.push('/');
        } catch(error) {
            alert(error);
        }
    };
    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
    };
    const handlePasswordChange = ({ target }) => {
        setPassword(target.value);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    email:
                    <input
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label htmlFor="">
                    password:
                    <input
                        type="text"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    );
};
