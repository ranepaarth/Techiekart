import { useContext, useReducer, useEffect, createContext } from "react";
import { useProductContext } from "./ProductContext";

import reducer from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters:{
    text:"",
  }
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

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;


    return dispatch({ type: "UPDATE_FILTER_VALUE",payload:{name,value}});
  }

  const setCategory = (category) => {
    console.log(category);
    return dispatch({ type: "SET_CATEGORY",payload:{category,products}})
  }

  useEffect(() => {
    dispatch({type:"FILTER_PRODUCTS"})
    dispatch({ type: "SORTING_PRODUCTS"});
  }, [products,state.sorting_value,state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting,updateFilterValue,setCategory}}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
