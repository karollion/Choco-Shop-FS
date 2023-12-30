import { API_URL } from '../config'
import { addToConfirmOrder } from './ordersRedux';

//selectors

// actions
const createActionName = actionName => `app/orders/${actionName}`;
const ADD_ORDER  = createActionName('ADD_ORDER');

// action creators
export const addOrder = payload => ({type: ADD_ORDER, payload});

export const addOrderRequest = (confirmOrderData, orders) => {
  return(dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        confirmOrderData
      )
    };
    fetch(`${API_URL}/confirm-orders`, options)
      .then(() => {
        for(let order of orders){
          dispatch(addToConfirmOrder({orderId: order.id, confirmId: confirmOrderData.id }))
        }
      })
      .catch((err) => console.log(err))
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