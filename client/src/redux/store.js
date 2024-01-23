import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import isloadingReducer from './isLoadingRedux';
import productsReducer from './productsRedux';
import ordersReducer from './ordersRedux';
import confirmOrdersReducer from './confirmOrdersRedux';
import userReducer from './userRedux';
import doneOrdersReducer from './doneOrdersRedux';
import searchOrderReducer from './searchOrderRedux';

const subreducers = {
  loading: isloadingReducer,
  searchOrder: searchOrderReducer,
  products: productsReducer,
  orders: ordersReducer,
  doneOrders: doneOrdersReducer,
  confirmOrders: confirmOrdersReducer,
  user: userReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;