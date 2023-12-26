import { API_URL } from '../config'

//selectors

// actions
const createActionName = actionName => `app/orders/${actionName}`;
const ADD_ORDER  = createActionName('ADD_ORDER');

// action creators
export const addOrder = payload => ({type: ADD_ORDER, payload});

export const addOrderRequest = order => {
  return(dispatch) => {

    const fd = new FormData()

    const options = {
      method: 'POST',
      credentials: 'include',
      body: fd
    };
    
    fetch(`${API_URL}/orders`, options)
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