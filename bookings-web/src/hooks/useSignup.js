import { useState } from 'react';
import { useHistory } from 'react-router';

export const useSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            username,
            email,
            password,
        };
        const existingUser = await fetch(
            `${process.env.BASE_URL}/users/getByEmail/${email}`
        );
        const existing = await existingUser.json();

        if (existing.length) {
            alert('Account with that email already exists');
            return;
        }
        try {
            await fetch(`${process.env.BASE_URL}/users/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
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
    const handleUsernameChange = ({ target }) => {
        setUsername(target.value);
    };

    return {
        email,
        password,
        username,
        handleSubmit,
        handleUsernameChange,
        handleEmailChange,
        handlePasswordChange,
    };
};
