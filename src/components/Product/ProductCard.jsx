import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ProductCard = ({ item }) => {
    const { deleteProduct, addProductToCart, checkProductInCart } = useProducts()
    const navigate = useNavigate()
    return (
        <div className='card'>
            <img src={item.img} alt="" />            
            <h4>{item.title} {item.model}</h4>
            <p>{item.price / 1000}K $</p>
            <button onClick={()=>deleteProduct(item.docId)}>Delete</button>
            <button onClick={() => navigate(`/edit/${item.docId}`)} >Edit</button>
            <button onClick={() => addProductToCart(item)}>
                <ShoppingCartIcon color={checkProductInCart(item.docId) ? "error" : ""}/> 
            </button>
        </div>
    );
};

export default ProductCard; 