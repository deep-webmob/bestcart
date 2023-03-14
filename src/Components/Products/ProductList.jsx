import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { ProductListAPI } from "../../api/productList";
import { currencyFormatter } from "../../utils/utils";

const ProductList = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fetchDetails = await ProductListAPI();
      setProducts(fetchDetails);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      {products?.map((product) => {
        return (
          <a
            className="grid grid-cols-4 my-5"
            href={`electronics/details/${product?.id}`}
            key={product?.id}
          >
            {/**col-1 */}
            <div>
              <img src={product?.image} alt="" className="h-60 mx-auto" />
            </div>

            {/**col-2 & 3 */}
            <div className="col-span-2">
              {/** product title */}
              <h2>{product?.title}</h2>

              {/** product ratings */}
              <div className="flex bg-green-600 w-fit rounded text-slate-100 py-1 px-2">
                <span className="">{product.rating?.rate}</span>
                <small className="mt-1 ml-2">
                  <BsFillStarFill />
                </small>
              </div>

              {/** product specifications */}
              {/* <ul className="text-sm list-disc mt-1">
                  <li>{product.specifications.ram}</li>
                  <li>{product.specifications.display}</li>
                  <li>{product.specifications.camera}</li>
                  <li>{product.specifications.battery}</li>
                  <li>{product.specifications.processor}</li>
                  <li>{product.specifications.warranty}</li>
                </ul> */}
            </div>

            {/**col-4 */}
            <div>
              <div className="text-lg font-semibold">
                {currencyFormatter(product.price)}
              </div>
              {/* <del className="text-sm">
                  {currencyFormatter(product?.originalPrice ? "original" : "fake")}
                </del>
                <span className="ml-2 text-green-600">
                  {100 -
                    ((product.price * 100) / product.originalPrice).toPrecision(
                      2
                    )}
                  % off
                </span> */}
              {/* <div>{product.offers}</div> */}
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default ProductList;
