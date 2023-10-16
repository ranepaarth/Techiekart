const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      let {product,amount,addedToWishlist} = action.payload;

      let wishlistProduct;
      wishlistProduct = {
        id: product.id,
        name: product.title,
        amount,
        image: product.thumbnail,
        price: product.price,
        desc: product.description,
        stock: product.stock,
        brand: product.brand,
        addedToWishlist,
      };

      console.log(wishlistProduct);
      return {
        // ...state,
        wishListCart: [...state.wishListCart, wishlistProduct],
      };

    case "REMOVE_FROM_WISHLIST":
      let updatedCart = state.wishListCart.filter(
        (product) => product.id !== action.payload
      );

      return {
        ...state,
        wishListCart: updatedCart,
      };

    default:
      return {
        ...state,
      };
  }
};

export default wishlistReducer;
