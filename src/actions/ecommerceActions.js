import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_FAIL,
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAIL,
} from "../constants/ecommerceConstants";

import axios from "axios";


// productsList

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    const response = await axios.get('https://fakestoreapi.com/products')

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error });
  }
};

// productDetails

// export const productDetail = (productId) => async (dispatch) => {
//   try {
//     dispatch({
//       type: GET_DETAIL_REQUEST,
//     });

//     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
//     console.log("response",response);
//     dispatch({
//       type: GET_DETAIL_SUCCESS,
//       payload: response.data,
//     });
//     console.log(response.data,'GET DETAIL SUCCES');
    
//   } catch (error) {
//     dispatch({
//       type: GET_DETAIL_FAIL,
//       payload: error,
//     });
//   }
// };