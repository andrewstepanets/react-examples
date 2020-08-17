import React, { useState } from 'react';
import axios from 'axios';

const Form = props => {
    const [username, setUsername] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        axios.get(`http://api.github.com/users/${username}`)
            .then(response => {
                props.onSubmit(response.data);
                setUsername('');
            });
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={username}
                onChange={event => setUsername(event.target.value)}
                placeholder="GitHub username"
                required
                />
                <button type="submit">Add card</button>
        </form>
    );
};

export default Form;