import {
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react";
import axios from "axios";

import reducer from '../reducers/productReducer.js'

const AppContext = createContext();

const initialState = {
  isLoading:false,
  products: [],
};

const API = "https://dummyjson.com/products";
// const API = "https://api.pujakaitem.com/api/products"
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (API) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(API);
      const products = await response.data;
      // console.log(products.products);
      dispatch({ type: "SET_API_DATA", payload: products.products });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useProductContext = () =>{
    return useContext(AppContext)
}

export {AppProvider,AppContext,useProductContext}