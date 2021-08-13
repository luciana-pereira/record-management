import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { CartReducer } from './Components/Reducers/CartReducers';
import { productDetailsReducer, productListReducer } from './Components/Reducers/ProductReducers';
import { userSigninReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './Components/Reducers/UserReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderMineListReducer } from './Components/Reducers/OrderReducers'

const initialState = {
  	userSignin: {
    	userInfo: localStorage.getItem('userInfo')
      	? JSON.parse(localStorage.getItem('userInfo'))
      	: null,
  	},

  	cart: {
    	cartItems: localStorage.getItem('cartItems')
      	? JSON.parse(localStorage.getItem('cartItems'))
      	: [],

    	shippingAddress: localStorage.getItem('shippingAddress')
      	? JSON.parse(localStorage.getItem('shippingAddress'))
      	: {},

    	paymentMethod: 'PayPal',
  	},
};

const reducer = combineReducers({
  	productList: productListReducer,
  	productDetails: productDetailsReducer,
  	cart: CartReducer,
  	userSignin: userSigninReducer,
  	userRegister: userRegisterReducer,
  	orderCreate: orderCreateReducer,
  	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	orderMineList: orderMineListReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  	reducer,
  	initialState,
  	composeEnhancer(applyMiddleware(thunk))
);

export default Store;