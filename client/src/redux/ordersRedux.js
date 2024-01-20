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
  return(dispatch) => {
    localStorage.removeItem('orders');
  };
};

//Comunication to server

export const addGuestOrders = (orders) => {
  return(dispatch) => {
    orders.map(order => dispatch(addOrderRequestOnServer(order)));
  };
};

export const confirmGuestOrders = (orders, confirmId) => {
  return(dispatch) => {
    orders.map(order => dispatch(addToConfirmOrderRequest({ orderId: order.id, confirmId: confirmId })));
  };
};

/**
 * The function is used to download user orders from the server.
 */
export const fetchOrdersFromServer = (userId) => {
  return(dispatch) => {
    dispatch(setLoading(true))

    fetch(`${API_URL}/orders/user/${userId}`)
      .then(res => res.json())
      .then(orders => {
        if(orders.message === 'Orders not found') {
          orders = []
        }
        dispatch(setLoading(false)) 
        dispatch(loadOrders(orders))});
  };
};

/**
 * The function is used to add user order to the server.
 */
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
      .catch((err) => console.log(err))
  };
};

/**
 * The function is used to link an order with an order confirmation
 * @param {*} data {orderId, confirmId}
 */
export const addToConfirmOrderRequest = data => {
  return(dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch(`${API_URL}/orders/confirmorder`, options)
      .catch((err) => console.log(err))
  };
};

/**
 * The function is used to update user order no the server.
 * Nex function download orders.
 * @param {*} order 
 */
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
      .then(() => {dispatch(fetchOrdersFromServer())})
      .catch((err) => console.log(err))
  };
};

/**
 * The function is used to delete user order on the server.
 * @param {*} id (uuid)
 */
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