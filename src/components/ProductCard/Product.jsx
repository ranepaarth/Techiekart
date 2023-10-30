//Components
import ProductDetailModal from "./ProductDetailModal";

//Icons

//Contexts
import { useProductContext } from "../../context/ProductContext";

import DetailsIcon from "./DetailsIcon";
import HeartIcon from "./HeartIcon";
import ProductDeleteIcon from "./ProductDeleteIcon";
import ProductFooter from "./ProductFooter";
import ProductTitle from "./ProductTitle";

const Product = (currElem) => {
  const { productDetails, show } = useProductContext();

  if (show)
    return (
      <>
        <ProductDetailModal details={productDetails} />
      </>
    );

  return (
    <div className="flex flex-col gap-4 relative select-none p-1 pt-0">
      <span className="text-xs text-gray-400 absolute right-0 capitalize">
        {currElem.category}
      </span>
      <header className="flex items-center justify-between">
        <ProductTitle title={currElem.title} brand={currElem.brand} />
        <span
          className={`text-black text-xl  pt-6 cursor-pointer flex items-center gap-2`}
        >
          <DetailsIcon currElem={currElem} />
          <HeartIcon currElem={currElem} />
        </span>
      </header>
      <main>
        <figure className="p-2 bg-neutral-100 shadow-sm rounded-md border">
          <img
            src={currElem.thumbnail}
            alt={currElem.title}
            className="h-52 md:h-64 w-full rounded-md object-fill"
          />
        </figure>
        <div className="flex justify-between items-center text-xl">
          <span className="font-semibold py-3 text-">₹{currElem.price}</span>
          <ProductDeleteIcon currElemId={currElem.id} />
        </div>
      </main>

      <footer>
        <div className="flex justify-end text-xl mb-1"></div>
        <ProductFooter currElem={currElem} />
      </footer>
    </div>
  );
};

export default Product;
