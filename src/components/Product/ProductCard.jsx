import React from 'react';

const ProductCard = ({ item }) => {
    return (
        <div className='card'>
            <img src={item.img} alt="" />            
            <h4>{item.title} {item.model}</h4>
            <p>{item.price / 1000}K $</p>
        </div>
    );
};

export default ProductCard;