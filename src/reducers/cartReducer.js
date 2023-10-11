const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { amount, product } = action.payload;
      console.log(product)

      //prevent duplicate

      let existingProduct = state.cart.find(
        (currProduct) => currProduct.id === product.id
      );
      // console.log(existingProduct);

      if (existingProduct) {
        let updatedProduct = state.cart.map((currProduct) => {
          if (currProduct.id === product.id) {
            let newAmount = currProduct.amount + amount;
            return {
              ...currProduct,
              amount: newAmount,
            };
          } else {
            return currProduct;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct;
        cartProduct = {
          id: product.id,
          name: product.title,
          amount,
          image:product.thumbnail,
          price: product.price,
          desc: product.description,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "REMOVE_PRODUCT":
      let updatedCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };

    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return { ...state };
  }
};

export default cartReducer;
