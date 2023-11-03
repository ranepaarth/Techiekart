const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_API_DATA":
      return {
        products: action.payload,
        isLoading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_PRODUCT_DETAILS":
      const productDetail = action.payload

      return {
        ...state,
        productDetails: action.payload,
        show:true,
      };

    // case "OPEN_PRODUCT_MODAL":
    //   return {
    //     ...state,
    //     // show: true,
    //   };

    case "CLOSE_PRODUCT_MODAL":
      return {
        ...state,
        productDetails:"",
        show: false,
      };

    default:
      return state;
  }
};

export default productReducer;
