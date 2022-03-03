import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';

const ProductCard = ({ item }) => {
    const { deleteProduct } = useProducts()
    const navigate = useNavigate()
    return (
        <div className='card'>
            <img src={item.img} alt="" />            
            <h4>{item.title} {item.model}</h4>
            <p>{item.price / 1000}K $</p>
            <button onClick={()=>deleteProduct(item.id)}>Delete</button>
            <button onClick={() => navigate(`/edit/${item.id}`)} >Edit</button>
        </div>
    );
};

export default ProductCard;