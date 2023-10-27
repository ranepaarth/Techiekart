import { useReducer, useContext, createContext, useEffect } from "react";
import reducer from "../reducers/wishlistReducer";
const wishlistContext = createContext();

const getLocalWishListItems = () => {
    let localCartData = localStorage.getItem("WishListCart")
    // console.log(localCartData)
    if(localCartData.length === 0) return [];
    else return JSON.parse(localCartData)
}

const initialState = {
  wishListCart: getLocalWishListItems(),
  // wishListCart:[]
};

export const WishlistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToWishList = (product,amount=1,addedToWishlist=false) => {
    // console.log(product);
    return dispatch({ type: "ADD_TO_WISHLIST", payload: {product,amount,addedToWishlist} });
  };

  const removeFromWishList = (id) => {
    return dispatch({type:"REMOVE_FROM_WISHLIST", payload:id})
  }

  const clearWishlist = () => {
    console.log("clear wishlist")
    return dispatch({type:"CLEAR_WISHLIST"})
  }

  useEffect(()=>{
    localStorage.setItem("WishListCart",JSON.stringify(state.wishListCart))
  },[state.wishListCart])

  return (
    <wishlistContext.Provider value={{ ...state, addToWishList,removeFromWishList,clearWishlist }}>
      {children}
    </wishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  return useContext(wishlistContext);
};
