import { useState } from 'react';
import { useHistory } from 'react-router';
import { checkIfLoggedIn } from '../services/checkIfLoggedIn';

export const useEditUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const { id } = await checkIfLoggedIn();
        console.log(id, 'id line 11');
        const response = await fetch(`${process.env.BASE_URL}/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                newEmail: email,
                newUsername: username
            })
        });
        console.log(response);
        const json = await response.json();
        alert(`Updated account:
        Email: ${json.email}
        Username: ${json.username}
        Please login to continue`);
        history.push('/login');

    };

    return {
        username,
        email,
        setEmail,
        setUsername,
        onSubmit,
    };
};
