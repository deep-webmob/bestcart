import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { productDetails } from "../../Data";
import { currencyFormatter } from "../utils";
import { MdLocalOffer } from "react-icons/md";

const ProductDetail = () => {
  const params = useParams();
  //   console.log(params);
  return (
    <section>
      {productDetails
        .filter((product) => product.id === params.id)
        .map((product) => {
          return (
            <div className="grid grid-cols-5 my-5">
              {/**col-1 */}
              <div className="col-span-2">
                <img
                  src={product.link}
                  alt=""
                  className="h-96 flex place-self-center mb-5 mx-auto"
                />
                <div className="flex justify-center">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 w-48 mx-1 rounded">
                    Add to Cart
                  </button>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 w-48 mx-1 rounded">
                    Buy Now
                  </button>
                </div>
              </div>

              {/**col-2 & 3 */}
              <div className="col-span-3">
                {/** product title */}
                <h2>{product.title}</h2>

                {/** product ratings */}
                <div className="flex bg-green-600 w-fit rounded text-slate-100 py-1 px-2">
                  <span className="">{product.ratings}</span>
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
                <div>
                  {/** Price Section */}
                  <div>
                    <div className="text-green-600 mt-3">
                      Extra{" "}
                      {currencyFormatter(product.originalPrice - product.price)}{" "}
                      off
                    </div>
                    <div className="text-lg font-semibold">
                      {currencyFormatter(product.price)}
                      <del className="text-sm ml-3 opacity-60">
                        {currencyFormatter(product.originalPrice)}
                      </del>
                      <span className="ml-2 text-green-600">
                        {100 -
                          (
                            (product.price * 100) /
                            product.originalPrice
                          ).toPrecision(2)}
                        % off
                      </span>
                    </div>
                    <small className="capitalize font-thin">
                      + {currencyFormatter(29)} secure packaging fee
                    </small>
                  </div>

                  {/** available offers */}
                  <div className="mt-4">
                    <label>Available Offers</label>
                    {product.offers.map((offer) => {
                      return (
                        <div className="flex">
                          <MdLocalOffer className="mr-2 mt-1 scale-110 text-green-600" />
                          <span>{offer}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/** Exchange offer */}
                  <div className="border-2 rounded w-80 mt-5">
                    <div className="flex justify-between p-3">
                      <div>
                        <input
                          type="radio"
                          name="exchange_product"
                          className="mr-2"
                          value="buy_without_exchange"
                        />
                        <label className="capitalize">
                          buy without exchange
                        </label>
                      </div>
                      <div className="font-semibold">
                        {currencyFormatter(product.price)}
                      </div>
                    </div>
                    <div className="border-t-2" />
                    <div className="flex justify-between p-3">
                      <div>
                        <input
                          type="radio"
                          name="exchange_product"
                          className="mr-2"
                          value="buy_with_exchange"
                        />
                        <label className="capitalize">
                          buy without exchange
                        </label>
                      </div>
                      <div className="font-semibold">
                        {currencyFormatter(
                          product.originalPrice - product.price / 2
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default ProductDetail;
