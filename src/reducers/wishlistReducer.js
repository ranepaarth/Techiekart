const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      let { product } = action.payload;

      console.log(product);

      let wishlistProduct;
      wishlistProduct = {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        description: product.description,
        stock: product.stock,
        brand: product.brand,
        rating: product.rating,
        discountPercentage: product.discountPercentage
      };

      console.log(wishlistProduct);
      return {
        ...state,
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

    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishListCart: [],
      };

    default:
      return {
        ...state,
      };
  }
};

export default wishlistReducer;
