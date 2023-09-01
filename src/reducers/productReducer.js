const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_API_DATA":
      return {
        products: action.payload,
        isLoading:false,
      };

      case "SET_LOADING":
        return {
          ...state,
          isLoading:true,
        }

    default:
      return state;
  }
};

export default productReducer;