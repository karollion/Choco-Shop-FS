import { API_URL } from '../config'
import { setLoading } from './isLoadingRedux';

//selectors
export const getAllDoneOrders = ({ doneOrders }) => doneOrders;

// actions
const createActionName = actionName => `app/orders/${actionName}`;
const LOAD_DONE_ORDERS = createActionName('LOAD_DONE_ORDERS');

// action creators
export const loadDoneOrders = payload => ({type: LOAD_DONE_ORDERS, payload});

/**
 * The function is used to download user done orders from the server.
 */
export const fetchDoneOrdersFromServer = (userId) => {
  return(dispatch) => {
    dispatch(setLoading(true))

    fetch(`${API_URL}/orders/user/done/${userId}`)
      .then(res => res.json())
      .then(doneOrders => {
        if(doneOrders.message === 'Orders not found') {
          doneOrders = []

        }
        dispatch(setLoading(false)) 
        dispatch(loadDoneOrders(doneOrders))});
  };
};

const doneOrdersReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_DONE_ORDERS:
      return [...action.payload];
    default:
      return statePart;
  };
};

export default doneOrdersReducer;