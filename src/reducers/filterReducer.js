const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    // case "SET_GRID_VIEW":
    //   return {
    //     ...state,
    //     grid_view: true,
    //   };

    // case "SET_LIST_VIEW":
    //   return {
    //     ...state,
    //     grid_view: false,
    //   };

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortData = [...action.payload];

      const { filter_products } = state;
      let tempSortData = [...filter_products];

      const sortingProducts = (a, b) => {
        if (state.sorting_value === "lowest") return a.price - b.price;
        if (state.sorting_value === "highest") return b.price - a.price;
        if (state.sorting_value === "a-z")
          return a.title.localeCompare(b.title);
        if (state.sorting_value === "z-a")
          return b.title.localeCompare(a.title);
      };

      newSortData = tempSortData.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterData = [...all_products];

      const { text } = state.filters;

      // console.log(tempFilterData);
      if (text) {
        tempFilterData = tempFilterData.filter((currElem) => {
          // console.log(currElem.title.toLowerCase().includes(text));
          return currElem.title.toLowerCase().includes(text);
        });
      }

      return {
        ...state,
        filter_products: tempFilterData,
      };

    case "SET_CATEGORY":
      const { category, products } = action.payload;
      let temp_products = [...products];
      let category_products;
      category === "all"
        ? (category_products = temp_products)
        : (category_products = temp_products.filter(
            (product) => product.category === category
          ));
      // console.log(category_products)
      return {
        ...state,
        filter_products: category_products,
      };

    case "CLEAR_FILTER":
      const allProducts = action.payload;

      console.log(allProducts);
      return {
        ...state,
        filter_products: allProducts,
        filters:{
          text:"",
        }
      };

    default:
      return state;
  }
};

export default filterReducer;

// if (state.sorting_value === "lowest") {
//   const sortingProducts = (a, b) => {
//     return a.price - b.price;
//   };
//   newSortData = tempSortData.sort(sortingProducts);
// }

// if (state.sorting_value === "highest") {
//   const sortingProducts = (a, b) => {
//     return b.price - a.price;
//   };
//   newSortData = tempSortData.sort(sortingProducts);
// }

// if (state.sorting_value === "a-z") {
//   newSortData = tempSortData.sort((a, b) => {
//     return a.title.localeCompare(b.title);
//   });
// }

// if (state.sorting_value === "z-a") {
//   newSortData = tempSortData.sort((a, b) => {
//     return b.title.localeCompare(a.title);
//   });
// }
