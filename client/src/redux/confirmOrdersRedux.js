import { API_URL } from '../config'
import { addOrderRequestOnServer, addToConfirmOrderRequest } from './ordersRedux';

//selectors

// actions
const createActionName = actionName => `app/orders/${actionName}`;
const ADD_ORDER  = createActionName('ADD_ORDER');

// action creators
export const addOrder = payload => ({type: ADD_ORDER, payload});

export const addOrderRequest = (confirmOrderData, orders) => {
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
        const addOrderRequests = orders.map(order => dispatch(addOrderRequestOnServer(order)));
        return Promise.all(addOrderRequests);
      })
      .then(() => {
        const addToConfirmRequests = orders.map(order => dispatch(addToConfirmOrderRequest({ orderId: order.id, confirmId: confirmOrderData.id })));
        return Promise.all(addToConfirmRequests);
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