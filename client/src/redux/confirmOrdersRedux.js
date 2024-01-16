import { API_URL } from '../config'
import { addToConfirmOrderRequest } from './ordersRedux';

//selectors

// actions
const createActionName = actionName => `app/orders/${actionName}`;
const ADD_ORDER  = createActionName('ADD_ORDER');

// action creators
export const addOrder = payload => ({type: ADD_ORDER, payload});

/**
 * The function is used to create an order confirmation for a guests on the server. 
 * Then link orders with it.
 * @param {*} confirmOrderData 
 * @param {*} orders 
 */

export const addConfirmRequest = (confirmOrderData) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(confirmOrderData)
    };

    fetch(`${API_URL}/confirm-orders`, options)
      .catch((err) => console.log(err));
  };
};

/**
 * The function is used to create an order confirmation for a logged in user on the server. 
 * Then link orders with it.
 * @param {*} confirmOrderData 
 * @param {*} orders 
 */
export const addConfirmOrdersRequest = (confirmOrderData, orders) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(confirmOrderData)
    };

    fetch(`${API_URL}/confirm-orders`, options)
      .then(() => {
        orders.map(order => dispatch(addToConfirmOrderRequest({orderId: order.id, confirmId: confirmOrderData.id})));
      })
      .catch((err) => console.log(err));
  };
};

const confirmOrdersReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...statePart, { ...action.payload }];
    default:
      return statePart;
  };
};

export default confirmOrdersReducer;