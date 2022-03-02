import axios from 'axios'
import { createContext, useContext, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ACTIONS, JSON_API_PRODUCTS } from '../helpers/consts';
import { calcSubPrice, calcTotalPrice, getCountProductsInCart } from '../helpers/functions'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, limit, where, isGreaterThanOrEqualTo, orderBy, startAt, endAt } from 'firebase/firestore'
import { db } from '../fire'

export const productContext = createContext();

export const useProducts = () => {
    return useContext(productContext);
};

const INIT_STATE = {
    products: [],
    productDetails: {},
    // cart: JSON.parse(localStorage.getItem('cart')),
    // cartLength: getCountProductsInCart()
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCTS:
            return { ...state, products: action.payload };
        case ACTIONS.GET_PRODUCT_DETAILS:
            return { ...state, productDetails: action.payload };
        case ACTIONS.GET_CART:
          return {...state, cart: action.payload}
        case ACTIONS.CHANGE_CART_LENGTH:
          return {...state, cartLength: action.payload}
        default:
            return state
    }
};

const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const usersCollectionRef = collection(db, "cars")
    
  
    const location = useLocation();
    const navigate = useNavigate();

    const getProducts = async(search='') => {
        const q = query(usersCollectionRef, orderBy('title'), startAt(search), endAt(search + '\uf8ff'))
        const data = await getDocs(q)
        dispatch({
            type: ACTIONS.GET_PRODUCTS,
            payload: data.docs.map((doc)=> ({...doc.data(), id: doc.id}))
        })
    }

    const addProduct = async (newProduct) => {
        await addDoc(usersCollectionRef, newProduct);
        getProducts();
    };

  
    const values = {
        getProducts,
        addProduct,
        products: state.products 
    };
    return (
      <productContext.Provider value={values}>{children}</productContext.Provider>
    );
};
  
export default ProductContextProvider;
  