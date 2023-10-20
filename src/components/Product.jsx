//Components
import ProductDetailModal from "./ProductDetailModal";

//Icons
import { FiHeart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoBagAddOutline, IoBagCheckOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

//Contexts
import { useWishlistContext } from "../context/wishListContext";
import { useCartContext } from "../context/cartContext";
import { useProductContext } from "../context/ProductContext";

const Product = (currElem) => {
  const { cart,addToCart } = useCartContext();
  const { addToWishList, removeFromWishList, wishListCart } = useWishlistContext();
  const {
    openProductModal,
    productDetails,
    getProductDetails,
    closeProductModal,
    show,
  } = useProductContext();

  const productExists = cart.find((product) => {
    if (product.id === currElem.id) return true;
  });

  const addToWishListFunction = (currElem) => {
    addToWishList(currElem);
  };

  const removeFromWishListFunction = (id) => {
    removeFromWishList(id);
  };

  const checkIfExists = () => {
    const idArray = [];
    let wishListProduct = wishListCart.find((product) => {
      if (!idArray.includes(product.id)) idArray.push(product.id);
    });
    return { idArray };
  };

  if (show)
    return (
      <>
        <ProductDetailModal
          details={productDetails}
          closeProductDetails={closeProductModal}
        />
        <button
          className="z-50 absolute top-16 right-14 text-lg"
          onClick={() => closeProductModal()}
        >
          <AiOutlineClose />
        </button>
      </>
    );

  return (
    <div className="flex flex-col gap-4 relative select-none ">
      <span className="text-xs text-gray-400 absolute right-0">
        {currElem.category}
      </span>
      <header className="flex justify-between">
        <span className="pt-6 line-clamp-1">
          {currElem.title}
          <small> ({currElem.brand})</small>
        </span>
        <span className={`items-end text-black text-lg  pt-6 cursor-pointer`}>
          {checkIfExists().idArray.includes(currElem.id) ? (
            <span
              onClick={() => {
                removeFromWishListFunction(currElem.id);
              }}
            >
              <span className="text-red-600">
                <FaHeart />
              </span>
            </span>
          ) : (
            <span
              onClick={() => {
                addToWishListFunction(currElem);
              }}
            >
              <span className="text-black">
                <FiHeart />
              </span>
            </span>
          )}
        </span>
      </header>
      <main className="p-2 bg-neutral-100 shadow-sm rounded-md border">
        <img
          src={currElem.thumbnail}
          alt={currElem.title}
          className="h-44 md:h-64 w-full rounded-md"
        />
      </main>
      <p className="text-xl font-semibold py-3 text-">₹{currElem.price}</p>
      <footer className="">
        {productExists ? (
          <span className="flex justify-center">
            <button
              className="bg-orange-400 py-2 rounded-md hover:scale-105 w-full font-medium flex justify-center gap-2"
              onClick={() => {
                openProductModal();
                getProductDetails(currElem);
              }}
            >
              <IoBagCheckOutline className="text-xl" />
              Added Successfully
            </button>
          </span>
        ) : (
          <span className="flex justify-center">
            <button
              className="flex justify-center gap-2 bg-orange-400 py-2 rounded-md hover:scale-105 w-full"
              onClick={() => {
                addToCart(currElem);
                openProductModal();
                getProductDetails(currElem);
              }}
            >
              <IoBagAddOutline className="text-xl" />
              Add To Cart
            </button>
          </span>
        )}
      </footer>
    </div>
  );
};

export default Product;
