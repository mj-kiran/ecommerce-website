import { createStore,combineReducers, applyMiddleware } from "redux";
import {  productReducer } from "./reducers/productReducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const middleWare = [thunk];
const reducer = combineReducers({
  products: productReducer,
  // productDetails:productDetailReducer
});
const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
