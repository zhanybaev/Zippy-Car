import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ProductCard = ({ item }) => {
    const { deleteProduct, addProductToCart, checkProductInCart, deleteCartProducts } = useProducts()
    const navigate = useNavigate()
    return (
        <div className='card'>
            <img src={item.data().img} alt="" />            
            <h4>{item.data().title} {item.model}</h4>
            <p>{item.data().price / 1000}K $</p>
            <button onClick={()=>deleteProduct(item.id)}>Delete</button>
            <button onClick={() => navigate(`/edit/${item.id}`)} >Edit</button>
            <button onClick={() => addProductToCart(item.data())}>
                <ShoppingCartIcon color={checkProductInCart(item.id) ? "error" : ""}/> 
            </button>
        </div>
    );
};

export default ProductCard; 