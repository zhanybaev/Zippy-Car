import React from 'react';
import AddProduct from '../components/Product/AddProduct';

const AdminPage = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Admin</h1>
            <AddProduct/>
        </div>
    );
};

export default AdminPage;