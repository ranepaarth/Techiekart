import { useContext, useReducer, useEffect, createContext } from "react";
import { useProductContext } from "./ProductContext";

import reducer from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "lowest",
  filters: {
    text: "",
  },
};

export const FIlterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  // console.log(products);

  const [state, dispatch] = useReducer(reducer, initialState);

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  const setCategory = (category) => {
    // console.log(category);
    return dispatch({ type: "SET_CATEGORY", payload: { category, products } });
  };

  const clearFilter = () => {
    console.log("clear");
    return dispatch({type:"CLEAR_FILTER",payload:products})
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        sorting,
        updateFilterValue,
        setCategory,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
