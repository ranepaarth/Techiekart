import React, { useState } from "react";
import Loading from "../components/Loading";
import Product from "../components/Product";
import ProductDetailModal from "../components/ProductDetailModal";
import { useProductContext } from "../context/ProductContext";

const ProductPage = () => {
  const { isLoading, products } = useProductContext();
  // console.log(isLoading)

  const [detail,setDetail] = useState([])

  // console.log(detail)

  if (isLoading) return <Loading />;
  else {
    return (
      <div>
      <ProductDetailModal details={detail}/>
        {products.map((currElem) => {
          return (
            <section key={currElem.id} className='flex flex-col items-start mb-4'>
              <Product key={currElem.id} {...currElem} />
              <button onClick={()=>setDetail([currElem])}>view detail</button>
            </section>
          );
        })}
        {/* Products Page */}
      </div>
    );
  }
};

export default ProductPage;
