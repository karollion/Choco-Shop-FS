import { API_URL } from '../config'
import { setLoading } from './isLoadingRedux';

//selectors
export const getAllProducts = ({ products }) => products;
export const getProductById = ({ products }, productId) => products.find(product => product._id === productId);

// actions
const createActionName = actionName => `app/products/${actionName}`;
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
const UPDATE_PRODUCT = createActionName('UPDATE_PRODUCT');
const ADD_PRODUCT  = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');

// action creators
export const loadProducts = payload => ({type: LOAD_PRODUCTS, payload});
export const updateProduct = payload => ({type: UPDATE_PRODUCT, payload});
export const addProduct = payload => ({type: ADD_PRODUCT, payload});
export const removeProduct = payload => ({type: REMOVE_PRODUCT, payload});

export const fetchProducts = () => {
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then(products => {
        dispatch(setLoading(false)) 
        dispatch(loadProducts(products))});
  };
};

export const updateAdRequest = ( product ) => {
  return(dispatch) => {
    const fd = new FormData()

    const options = {
      method: 'PUT',
      credentials: 'include',
      body: fd
    };
    fetch(`${API_URL}/products/${product._id}`, options)
      .then(() => {dispatch(fetchProducts())})
  };
};

export const addAdRequest = product => {
  return(dispatch) => {

    const fd = new FormData()

    const options = {
      method: 'POST',
      credentials: 'include',
      body: fd
    };
    
    fetch(`${API_URL}/products`, options)
      .then(() => {dispatch(fetchProducts())})
      .catch((err) => console.log(err))
  };
};

export const removeAdRequest = id => {
	return dispatch => {
		const options = {
			method: 'DELETE',
      credentials: 'include',
		}

		fetch(`${API_URL}/products/${id}`, options)
      .then(() => {dispatch(removeProduct(id))})
	};
};

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload];
    case UPDATE_PRODUCT:
      return statePart.map(product => (product._id === action.payload.id ? { ...product, ...action.payload } : product));
    case ADD_PRODUCT:
      return [...statePart, { ...action.payload }];
    case REMOVE_PRODUCT:
      return statePart.filter(product => product._id !== action.payload);
    default:
      return statePart;
  };
};

export default productsReducer;