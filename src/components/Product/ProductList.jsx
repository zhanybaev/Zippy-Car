import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [search, setSearch] = useState('')
    const { getProducts, products } = useProducts() 

    useEffect(()=>{
        getProducts(search)
    }, [search])
    
    return (
        <div className='list'>
            <div>
            <input id="productSearch" type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
            </div>
            <div className='products'>
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
        </div>
    );
};

export default ProductList;