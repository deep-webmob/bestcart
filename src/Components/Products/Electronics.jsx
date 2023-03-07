import React, { useState } from "react";
import { BsSearch, BsFillStarFill } from "react-icons/bs";
import { brandNames, customerRatings, features, productDetails, ram } from "../../Data";
import { currencyFormatter } from "../utils";

const RangeFilter = () => {
  return (
    <div className="mt-2">
      <label>Price</label>
      <div>
        <input type="range" />
      </div>
    </div>
  )
}

const CategoryTitle = ({ title }) => {
  return (
    <div>
      <hr className="border-t-2 text-slate-700" />
      <div className="flex justify-between mt-4">
        <h1 className="uppercase">{title}</h1>
        <span className="text-2xl">^</span>
      </div>
    </div>
  )
}

const FilterData = ({ data, star }) => {
  return (
    <div>
      {
        data.map(name =>
          <div className="flex">
            <input type="checkbox" className="mr-2" />
            <p>{name}</p>
            {star ?
              <div className="flex">
                <span className="mt-1 mx-1">{star}</span>
                <span>&above</span>
              </div> :
              null}
          </div>
        )
      }
    </div>
  )
}

const Brand = ({ status }) => {
  return (
    <div>
      <CategoryTitle title="brand" />
      <div className="flex">
        <BsSearch className="mt-1 mr-1 w-3" />
        <input
          type="search"
          placeholder="Search Brands..."
          className="w-11/12 bg-transparent border-b-2 border-slate-700 focus:outline-none" />
      </div>
      <FilterData data={brandNames} />
    </div>
  )
}

const CustomerRatings = () => {
  return (
    <div>
      <CategoryTitle title="customer ratings" />
      <FilterData data={customerRatings} star={<BsFillStarFill />} />
    </div>
  )
}

const RAM = () => {
  return (
    <div>
      <CategoryTitle title="RAM" />
      <FilterData data={ram} />
    </div>
  )
}

const Features = () => {
  return (
    <div>
      <CategoryTitle title="features" />
      <FilterData data={features} />
    </div>
  )
}

const ProductList = () => {
  return (
    <section>
      {
        productDetails.map(product => {
          return (
            <div className="grid grid-cols-4 my-2">

              {/**col-1 */}
              <div>
                <img src={product.link} alt="" className="h-60" />
              </div>

              {/**col-2 & 3 */}
              <div className="col-span-2">
                {/** product title */}
                <h2>{product.title}</h2>

                {/** product ratings */}
                <div className="flex bg-green-600 w-fit rounded text-slate-100 py-1 px-2">
                  <span className="">{product.ratings}</span>
                  <small className="mt-1 ml-2"><BsFillStarFill /></small>
                </div>

                {/** product specifications */}
                <ul className="text-sm list-disc mt-1">
                  <li>{product.specifications.ram}</li>
                  <li>{product.specifications.display}</li>
                  <li>{product.specifications.camera}</li>
                  <li>{product.specifications.battery}</li>
                  <li>{product.specifications.processor}</li>
                  <li>{product.specifications.warranty}</li>
                </ul>
              </div>

              {/**col-4 */}
              <div>
                <div className="text-lg font-semibold">{currencyFormatter(product.price)}</div>
                <del className="text-sm">{currencyFormatter(product.originalPrice)}</del>
                <span className="ml-2 text-green-600">
                  {100 - (((product.price * 100) / product.originalPrice)).toPrecision(2)}% off
                </span>
                <div>{product.offers}</div>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

const Electronics = () => {
  const [showBrands, setShowBrands] = useState(true)
  return (
    <section className="grid grid-cols-5">
      {/** side panel */}
      <div className="h-full bg-slate-200 px-3">
        <h2 className="text-3xl">Filters</h2>
        <RangeFilter />
        {showBrands && <Brand status={showBrands} />}
        <CustomerRatings />
        <RAM />
        <Features />
      </div>
      {/** filtered product list */}
      <div className="mx-3 col-span-4">
        <ProductList />
      </div>
    </section>
  );
};

export default Electronics;
