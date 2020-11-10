import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';


const initialState = {};
const reducer = combineReducers({
    productsList: productListReducer,
    productDetails: productDetailsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;