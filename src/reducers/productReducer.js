import {
  GET_PRODUCTS_SUCCESS,
  GET_DETAIL_FAIL,
  GET_DETAIL_SUCCESS,
} from "../constants/ecommerceConstants";

const initialState = {
  products: [],
  
};

export const productReducer = (state = initialState , action) => {
    switch (action.type) {
      case GET_PRODUCTS_SUCCESS:
        
        return {
          ...state,
          products: action.payload,
        };
      

      default:
        return state;
  }
  
}

// export const productDetailReducer = (state={},action) => {
//  switch (action.type) {
//    case GET_DETAIL_SUCCESS:
//       console.log("GET_DETAIL_SUCCESS");
//      return {
       
//        ...state,
//        product: action.payload,
//      };
   

//    case GET_DETAIL_FAIL:
//      return {
//        ...state,
//      };
//    default:
//      return state;
//   }
  
// }