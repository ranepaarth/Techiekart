import ProductDeleteIcon from "./ProductDeleteIcon";
import ProductFooter from "./ProductFooter";
import ProductPrice from "../ProductPrice";
import ProductDetailImage from "../ProductDetailImage";
import ProductHeader from "./ProductHeader";

const Product = (currElem) => {
  const {title,category,brand,thumbnail,price,id} = currElem

  return (
    <div className="flex flex-col gap-4 relative select-none p-1 pt-0">
      <ProductHeader category={category} brand={brand} title={title} currElem={currElem}/>
      <main>
        <ProductDetailImage image={thumbnail} widthFull={"w-full"} mdHeight={"h-64"}/>
        <div className="flex justify-between items-center mt-5 text-xl">
          <ProductPrice amount={price} productCard={true}/>
          <ProductDeleteIcon currElemId={id} />
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
