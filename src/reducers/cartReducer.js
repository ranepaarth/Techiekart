const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { amount, product } = action.payload;
      // console.log(product);

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
          name: product.name || product.title,
          amount,
          image: product.image || product.thumbnail,
          price: product.price,
          desc: product.description,
          stock: product.stock,
          brand: product.brand,
        };
        // console.log(cartProduct);
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

    case "INCREMENT_AMOUNT":
      let increasedProduct = state.cart.map((product) => {
        if (product.id === action.payload) {
          let newAmount = product.amount + 1;
          
          if(newAmount > product.stock) newAmount = product.stock
          return {
            ...product,
            amount: newAmount,
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        cart: increasedProduct,
      };

    case "DECREMENT_AMOUNT":
      let decreasedProduct = state.cart.map((product) => {
        if(product.id === action.payload){
          let newAmount=product.amount - 1;


          if(newAmount <=1) newAmount = 1;

          return {
            ...product,
            amount: newAmount
          }
        }

        else {
          return product
        }
      });
      return {
        ...state,
        cart:decreasedProduct
      };

    default:
      return { ...state };
  }
};

export default cartReducer;
