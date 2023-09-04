import { useContext, useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useProductContext } from "./ProductContext";

import reducer from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
};

export const FIlterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  // console.log(products);

  const [state, dispatch] = useReducer(reducer, initialState);

  /*set grid view */
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE",payload: userValue });
  };

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS"});
  }, [state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
