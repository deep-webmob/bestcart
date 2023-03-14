import React from "react";
import { productData } from "../../Data.js";

const Product = ({ type }) => {
  return (
    <div className="mr-3 my-3 m-3">
      <img src={type} alt=""/>
    </div>
  );
};

const Products = ({ id }) => {
  return (
    <section className="mt-16">
      <div className="text-4xl">Product Categories</div>
      <div>
        <div className="grid grid-cols-6" id={id}>
          {productData.map((e) => {
            return <Product type={e} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
