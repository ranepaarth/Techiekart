import { useEffect, useReducer, createContext, useContext } from "react";
import reducer from "../reducers/cartReducer.js";

const CartContext = createContext();

const getLocalStorageCartData = () => {
  let localCartData = localStorage.getItem("productCart");
  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const initialState = {
  // cart: [],
  cart: getLocalStorageCartData(),
  total_items: "",
  total_amount: "",
  shipping_charges: 450,
  tax:18.29,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product, amount = 1) => {
    // console.log(product);
    dispatch({ type: "ADD_TO_CART", payload: { product, amount } });
  };

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };

  /* Increment and decrement amount */
  const incrementAmount = (id) => {
    dispatch({ type: "INCREMENT_AMOUNT", payload: id });
  };

  const decrementAmount = (id) => {
    dispatch({ type: "DECREMENT_AMOUNT", payload: id });
  };

  /* Update the subTotal */



  /* Local Storage */
  useEffect(() => {
    dispatch({type:"UPDATE_SUB_TOTAL"})
    localStorage.setItem("productCart", JSON.stringify(state.cart));
  }, [state.cart]);



  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeProduct, emptyCart,incrementAmount,decrementAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
