import { useState, useEffect } from 'react';
import axios from 'axios';

const ManageProfile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios
            .get('/api/user')
            .then(response => setUser(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleEditClick = () => {
        // Logic to show the modal and edit profile except email and role
    };

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <img src={user.profilePicture} alt="Profile" />
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <button onClick={handleEditClick}>Edit Profile</button>
            <button onClick={() => (window.location.href = '/dashboard/join-guide')}>Apply For Tour Guide</button>
        </div>
    );
};

export default ManageProfile;
