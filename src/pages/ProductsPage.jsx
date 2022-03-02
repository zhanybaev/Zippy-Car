import React from 'react';
import ProductList from '../components/Product/ProductList';

const ProductsPage = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Products</h1>
            <ProductList/>
        </div>
    );
};

export default ProductsPage;