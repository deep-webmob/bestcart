import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { brandNames } from "../../Data";

const RangeFilter = () => {
  return (
    <div className="my-2">
      <label>Price</label>
      <div>
        <input type="range" />
      </div>
    </div>
  )
}

const BrandNames = () => {
  return (
    <div className="mt-2">
      {
        brandNames.map(brand =>
          <div className="flex">
            <input type="checkbox" className="mr-2" />
            <p>{brand}</p>
          </div>
        )
      }
    </div>
  )
}

const Brand = ({ status }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="uppercase">Brand</h1>
        <span>^</span>
      </div>
      <div className="mt-2">
        <div className="flex">
          <BsSearch className="mt-1 mr-1 w-3" />
          <input type="search" placeholder="Search Brands..." className="w-11/12 bg-transparent border-b-2 border-slate-700 focus:outline-none" />
        </div>
      </div>
      <BrandNames />
    </div>
  )
}

const Electronics = () => {
  const [showBrands, setShowBrands] = useState(true)
  return (
    <div className="h-screen bg-slate-200 w-1/5 px-3">
      <h2 className="text-3xl">Filters</h2>
      <RangeFilter />
      {showBrands && <Brand status={showBrands} />}
    </div>
  );
};

export default Electronics;
