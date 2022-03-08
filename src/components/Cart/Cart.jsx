import * as React from 'react';
import { useState, useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import InfoIcon from '@mui/icons-material/Info';

export default function Cart() {
  const { cart, getCart, changeProductCount, deleteCartProducts } = useProducts();

  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem('cart');
    getCart();
  };

  const handleCountChange = (count, id) => {
    if (count <= 0 || count >= 1000) {
      count = 1;
      changeProductCount(count, id);
    } else {
      changeProductCount(count, id);
    }
    getCart()
  };


  return (
    <div className="cart">
      <h2 className='cartPage__title'>Your Cart</h2>
      <div className="cartPage-products">
      <div className="cartPage-products__left">
      {
        cart.products && cart.products.length ?  
          cart.products.map((item, index)=>(
          <div key={index} className="productInCart">
            <div className='productInCart__left'>
              <img className='productInCart-img' src={item.item.img} alt="Product Image" /> 
              <div className="productInCart-info">
                <p className='cart-product-title'>{item.item.title} {item.item.model} </p>
                <p className='cart-product-price'>(Item price: {item.item.price})</p>
                <div className="cart-product-info">
                  <span className="cart-product-type">{item.item.type} |</span>
                  <span> Year: {item.item.year} | </span>
                  <span>Quantity: </span>
                  <input 
                    type="number" 
                    min={1}
                    id="quantity-inp"
                    max={10} 
                    value={item.count} 
                    onChange={(e) =>handleCountChange(e.target.value, item.item.id)} 
                  />
                </div>
                <p id='buy_now'>Buy now</p>
                <div className="remove">
                  <span className='remove-from-cart' onClick={()=>deleteCartProducts(item.item.id)}>Remove </span>
                </div>
              </div>
            </div>
            <div className="productInCart__right">
              <p className='cart-product-subPrice'>${item.subPrice}</p>
            </div>
          </div>
        )): <h5>Cart is empty</h5>
      }
      </div>
      <div className="cartPage-products__right">
        <h6 id='cart-totalPrice'>Total</h6>
        <div className="underline"></div>
        <div className='cart-totalPrice__subPrice'>
          <div className="product__subPrice">
            <h6 className='cart-totalPrice__subPrice_subTotal'>Sub-total</h6>
            <span className='cart-totalPrice__subPrice_price'>$ {cart.totalPrice}</span>  
          </div>
          <div className="delivery__subPrice">
            <h6 className='cart-totalPrice__subPrice_subTotal'>Delivery</h6>
            <span className='cart-totalPrice__subPrice_price'><InfoIcon id="info-icon"/></span>  
          </div>
          <p id='standard-delivery'>Standard Delivery (Free)</p>
          <p id='clear-cart' onClick={cartCleaner}>Clear cart</p>
        </div>
        <div className="underline"></div>
        <button id='checkout-btn'>Checkout</button>
      </div>
      </div>
    </div>  
  );
}