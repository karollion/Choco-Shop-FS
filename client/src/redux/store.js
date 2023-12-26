import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import isloadingReducer from './isLoadingRedux';
import productsReducer from './productsRedux';
import ordersReducer from './ordersRedux';

const subreducers = {
  loading: isloadingReducer,
  products: productsReducer,
  orders: ordersReducer,
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