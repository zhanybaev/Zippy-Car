import React from 'react';
import { useProducts } from '../../contexts/ProductContext';

const ProductCard = ({ item }) => {
    const { deleteProduct } = useProducts()
    return (
        <div className='card'>
            <img src={item.img} alt="" />            
            <h4>{item.title} {item.model}</h4>
            <p>{item.price / 1000}K $</p>
            <button onClick={()=>deleteProduct(item.id)}>Delete</button>
        </div>
    );
};

export default ProductCard;