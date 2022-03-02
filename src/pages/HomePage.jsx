import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
    const { user: {email} } = useAuth()
    return (
        <div className="home">
            <h1 style={{textAlign:'center'}}>Home</h1>
        </div>
    );
};

export default HomePage;