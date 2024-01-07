import { API_URL } from '../config'
import { setLoading } from './isLoadingRedux';

//selectors
export const getAllOrders = ({ orders }) => orders;
export const getOrderById = ({ products }, productId) => products.find(product => product.id === productId);

// actions
const createActionName = actionName => `app/orders/${actionName}`;
const LOAD_ORDERS = createActionName('LOAD_ORDERS');
const UPDATE_ORDER = createActionName('UPDATE_ORDER');
const ADD_ORDER  = createActionName('ADD_ORDER');
const REMOVE_ORDER = createActionName('REMOVE_ORDER');

// action creators
export const loadOrders = payload => ({type: LOAD_ORDERS, payload});
export const updateOrder = payload => ({type: UPDATE_ORDER, payload});
export const addOrder = payload => ({type: ADD_ORDER, payload});
export const removeOrder = payload => ({type: REMOVE_ORDER, payload});

//Comunication to localStorage
export const fetchOrders = () => {
  return(dispatch) => {
    dispatch(setLoading(true));

    const ordersFromLocalStorage = JSON.parse(localStorage.getItem('orders')) || [];
    dispatch(loadOrders(ordersFromLocalStorage));
    dispatch(setLoading(false));
  };
};

export const updateOrderRequest = (order) => {
  return(dispatch, getState) => {
    const { orders } = getState();
    const updatedOrders = orders.map(o => (o.id === order.id ? { ...o, ...order } : o));

    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    dispatch(updateOrder(order));
  };
};

export const addOrderRequest = (order) => {
  return(dispatch, getState) => {
    const { orders } = getState();
    const updatedOrders = [...orders, order];

    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    dispatch(addOrder(order));
  };
};

export const removeOrderRequest = (id) => {
  return(dispatch, getState) => {
    const { orders } = getState();
    const updatedOrders = orders.filter(order => order.id !== id);

    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    dispatch(removeOrder(id));
  };
};

export const removeAllOrdersFromLocalStorage = () => {
  localStorage.removeItem('orders');
};

// Comunication to server
export const fetchOrdersOnServer = () => {
  return(dispatch) => {
    dispatch(setLoading(true))

    fetch(`${API_URL}/orders`)
      .then(res => res.json())
      .then(orders => {
        dispatch(setLoading(false)) 
        dispatch(loadOrders(orders))});
  };
};

export const addOrderRequestOnServer = order => {
  return(dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        order
      )
    };
    fetch(`${API_URL}/orders`, options)
      .then(() => {dispatch(fetchOrders())})
      .catch((err) => console.log(err))
  };
};

export const addToConfirmOrderRequest = data => {
  return(dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        data
      )
    };
    fetch(`${API_URL}/orders/confirmorder`, options)
      .catch((err) => console.log(err))
  };
};

/*
export const updateOrderRequestOnServer = ( order ) => {
  return(dispatch) => {
    const options = {
      method: 'PATCH',
      
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        order
      )
    };
    fetch(`${API_URL}/orders/${order.id}`, options)
      .then(() => {dispatch(fetchOrders())})
      .catch((err) => console.log(err))
  };
};
*//*
export const removeOrderRequestOnServer = id => {
	return dispatch => {
		const options = {
			method: 'DELETE',
      //credentials: 'include',
		}

		fetch(`${API_URL}/orders/${id}`, options)
      .then(() => {dispatch(removeOrder(id))})
	};
};
*/

const ordersReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_ORDERS:
      return [...action.payload];
    case UPDATE_ORDER:
      return statePart.map(order => (order.id === action.payload.id ? { ...order, ...action.payload } : order));
    case ADD_ORDER:
      return [...statePart, { ...action.payload }];
    case REMOVE_ORDER:
      return statePart.filter(order => order.id !== action.payload);
    default:
      return statePart;
  };
};

export default ordersReducer;