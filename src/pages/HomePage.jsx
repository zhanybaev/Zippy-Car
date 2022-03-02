import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
    const { user: {email} } = useAuth()
    return (
        <div>
            Home
        </div>
    );
};

export default HomePage;