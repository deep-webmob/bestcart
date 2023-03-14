import React, { useState } from "react";
import { BsSearch, BsStarFill } from "react-icons/bs";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {
  brandNames,
  customerRatings,
  features,
  ram,
} from "../../Data";
import { currencyFormatter } from "../../utils/utils";
import MultiRangeSlider from "multi-range-slider-react";
import "../../utils/utils.css";

import ProductList from "./ProductList";

const RangeFilter = () => {
  const [minValue, setMinValue] = useState(30);
  const [maxValue, setMaxValue] = useState(60);
  return (
    <div className="mt-2">
      <label>Price</label>
      <div className="shadow-none">
        <MultiRangeSlider
          min={0}
          max={100}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            setMinValue(e.minValue);
            setMaxValue(e.maxValue);
          }}
          barInnerColor="#155E75"
          className="mb-3"
        />
      </div>
      <div className="grid grid-cols-2">
        <label>Min: {currencyFormatter(minValue)}</label>
        <label className="justify-self-end w-28">
          Max: {currencyFormatter(maxValue)}
        </label>
      </div>
    </div>
  );
};

const CategoryTitle = ({ title, status, onClick }) => {
  const [show, setShow] = useState(true);
  return (
    <div onClick={onClick}>
      <hr className="border-t-2 text-slate-700" />
      <div className="flex justify-between mt-4">
        <h1 className="uppercase">{title}</h1>
        {show && (
          <span
            className="text-2xl cursor-pointer"
            onClick={() => setShow(false)}
          >
            <BiChevronUp />
          </span>
        )}
        {!show && (
          <span
            className="text-2xl cursor-pointer"
            onClick={() => setShow(true)}
          >
            <BiChevronDown />
          </span>
        )}
      </div>
    </div>
  );
};

const FilterData = ({ data, star }) => {
  return (
    <div>
      {data.map((name) => (
        <div className="flex" key={name}>
          <input type="checkbox" className="mr-2" />
          <p>{name}</p>
          {star ? (
            <div className="flex">
              <span className="mt-1 mx-1">{star}</span>
              <span>&above</span>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

const Brand = () => {
  const [branddata, setBrandData] = useState(brandNames);
  const [show, setShow] = useState(true);

  const searchBrands = (e) => {
    const results = brandNames.filter((brand) => {
      return brand.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setBrandData(results);
  };

  return (
    <section>
      <CategoryTitle title="brand" onClick={() => setShow(!show)} />
      {show && (
        <div>
          <div className="flex">
            <BsSearch className="mt-1 mr-1 w-3" />
            <input
              type="search"
              placeholder="Search Brands..."
              className="w-11/12 bg-transparent border-b-2 border-slate-700 focus:outline-none"
              onChange={searchBrands}
            />
          </div>
          <FilterData data={branddata} />
        </div>
      )}
    </section>
  );
};

const Filter = (props) => {
  const { data, title, star } = props;
  const [show, setShow] = useState(true);
  return (
    <div>
      <CategoryTitle title={title} onClick={() => setShow(!show)} />
      {show && <FilterData data={data} star={star} />}
    </div>
  );
};



const Electronics = () => {
  return (
    <section className="grid grid-cols-5">
      {/** side panel */}
      <div className="h-full bg-slate-200 px-3">
        <h2 className="text-3xl">Filters</h2>
        <RangeFilter />
        <Brand />
        <Filter title="RAM" data={ram} />
        <Filter
          title="Customer Ratings"
          data={customerRatings}
          star={<BsStarFill />}
        />
        <Filter title="Features" data={features} />
      </div>
      {/** filtered product list */}
      <div className="mx-3 col-span-4">
        <ProductList />
      </div>
    </section>
  );
};

export default Electronics;
