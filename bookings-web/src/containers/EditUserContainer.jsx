import React, { useEffect } from 'react';
import { useEditUser } from '../hooks/useEditUser';

// eslint-disable-next-line react/prop-types
const EditUserContainer = ({ updateUser }) => {
    const {
        username,
        email,
        setEmail,
        setUsername,
        onSubmit
    } = useEditUser();

    useEffect(() => {
        updateUser();
    }, []);

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">
                Update Username
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
            </label>
            <label htmlFor="">
                Update Email
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
            </label>
            <button>Update</button>
        </form>
    );
};

export default EditUserContainer;
