import { createContext, useContext, useReducer } from 'react';
import { ACTIONS  } from '../helpers/consts';
import { calcSubPrice, calcTotalPrice, getCountProductsInCart } from '../helpers/functions'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy, startAt, endAt, getDoc } from 'firebase/firestore'
import { db } from '../fire'

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
  edit: {},
  cart: JSON.parse(localStorage.getItem('cart')),
  cartLength: getCountProductsInCart()
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
          case ACTIONS.EDIT_CAR:
          return {...state, edit: action.payload}
        default:
            return state
    }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const usersCollectionRef = collection(db, "cars")
    
  const getProducts = async(search='') => {
    const q = query(usersCollectionRef, orderBy('title'), startAt(search), endAt(search + '\uf8ff'))
    const data = await getDocs(q)
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data.docs.map((doc)=> (doc))
    })
  }

  const addProduct = async (newProduct) => {
    await addDoc(usersCollectionRef, newProduct);
    getProducts();
  };

  const deleteProduct = async (id)=>{
    const userDoc = doc(db, "cars", id)
    await deleteDoc(userDoc)
    getProducts()
  }

  const getProductDetails = async (id) => {
    const q = doc(db, "cars", id)
    const data = await getDoc(q)
    dispatch({
      type: ACTIONS.EDIT_CAR,
      payload: data.data()
    });
  };

  const saveEditedProduct = async (productToEdit, id) => {
    const userDoc = doc(db, "cars", id)
    await updateDoc(userDoc, productToEdit)
    getProducts()
  }

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))

    if(!cart){
      localStorage.setItem('cart', JSON.stringify({
        products: [],
        totalPrice: 0
      }))
    
      cart = {
        products: [],
        totalPrice: 0
        }
    }
    
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart
    })
    
  }

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(!cart){
      cart = {
        products:[],
        totalPrice: 0 
      }
    }
    
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price
    }
    
    let productToFind = cart.products.filter(item=>item.item.id===product.id)
    
    if(productToFind.length === 0){
      cart.products.push(newProduct)
    }else{
      cart.products = cart.products.filter(item=>item.item.id!==product.id)
    }
    
    
    cart.totalPrice = calcTotalPrice(cart.products);
    
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart
    })
  }

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem('cart'))
  
    cart.products = cart.products.map((product)=>{
      if(product.item.id === id){
        product.count = count;
        product.subPrice = calcSubPrice(product)
      }
      return product
    })
    
    cart.totalPrice  = calcTotalPrice(cart.products)
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  function deleteCartProducts(id){
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart.products = cart.products.filter((item)=> item.item.id !== id)
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
    
    dispatch({
      type: ACTIONS.CHANGE_CART_LENGTH,
      payload: cart.products.length
    })
  }
    
  function checkProductInCart(id){
    let cart = JSON.parse(localStorage.getItem('cart'))
    
    if(cart){
      let newCart = cart.products.filter((element)=>element.item.id===id)
      cart.products.forEach(item=>{
        if(item.item.id!==id){
          console.log(item.item.id, id);
        }
      })
      return newCart.length > 0  
    }else{
      cart={
        product: [],
        totalPrice: 0
      }
    }
  }

  
  const values = {
    getProducts,
    addProduct,
    deleteProduct,
    saveEditedProduct,
    getProductDetails,
    edit: state.edit,
    products: state.products,
    productDetails: state.productDetails,
  
    getCart,
    addProductToCart,
    changeProductCount,
    deleteCartProducts,
    checkProductInCart,

    cart: state.cart,
    cartLength: state.cartLength
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};
  
export default ProductContextProvider;
  