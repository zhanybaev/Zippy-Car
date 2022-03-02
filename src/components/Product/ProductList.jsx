import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import ProductCard from './ProductCard';

const ProductList = () => {
    const { getProducts, products } = useProducts()
    useEffect(()=>{
        getProducts()
    }, [])
    console.log(products);
    return (
        <div className='list'>
            {
                products && products.length ? 
                    (products.map(item=>(
                        <ProductCard item={item} key={item.id}/>
                    ))):
                    (
                        <h3>Loading</h3>
                    )
            }
        </div>
    );
};

export default ProductList;