import React, { useEffect, useState, createContext, useContext } from "react";
import { BsSearch, BsFillStarFill } from "react-icons/bs";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {
  brandNames,
  customerRatings,
  features,
  productDetails,
  ram,
} from "../../Data";
import { currencyFormatter } from "../utils";
import MultiRangeSlider from "multi-range-slider-react";
import "../utils.css";
const UserContext = createContext();

const RangeFilter = () => {
  const [minValue, setMinValue] = useState(30);
  const [maxValue, setMaxValue] = useState(60);
  return (
    <div className="mt-2">
      <label>Price</label>
      <div className="shadow-none">
        {/* <input
          type="range"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
          className="w-full"
        /> */}
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

const CategoryTitle = ({ title, status }) => {
  const [show, setShow] = useState(true);
  return (
    <UserContext.Provider value={show}>
      <div>
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
    </UserContext.Provider>
  );
};

const FilterData = ({ data, star }) => {
  return (
    <div>
      {data.map((name) => (
        <div className="flex">
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
  const searchBrands = (e) => {
    const searchValue = e.target.value;
    const results = brandNames.filter((brand) => {
      return brand.toLowerCase().includes(searchValue.toLowerCase());
    });
    setBrandData(results);
  };

  const showData = useContext(UserContext);
  return (
    <section>
      <CategoryTitle title="brand" />
      {showData && (
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

const CustomerRatings = () => {
  const showData = useContext(UserContext);
  console.log(showData);
  return (
    <section>
      <div>
        <CategoryTitle title="customer ratings" />
        {!showData && (
          <FilterData data={customerRatings} star={<BsFillStarFill />} />
        )}
      </div>
    </section>
  );
};

const RAM = () => {
  return (
    <div>
      <CategoryTitle title="RAM" />
      <FilterData data={ram} />
    </div>
  );
};

const Features = () => {
  return (
    <div>
      <CategoryTitle title="features" />
      <FilterData data={features} />
    </div>
  );
};

const ProductList = () => {
  return (
    <section>
      {productDetails.map((product) => {
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
                <small className="mt-1 ml-2">
                  <BsFillStarFill />
                </small>
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
              <div className="text-lg font-semibold">
                {currencyFormatter(product.price)}
              </div>
              <del className="text-sm">
                {currencyFormatter(product.originalPrice)}
              </del>
              <span className="ml-2 text-green-600">
                {100 -
                  ((product.price * 100) / product.originalPrice).toPrecision(
                    2
                  )}
                % off
              </span>
              <div>{product.offers}</div>
            </div>
          </div>
        );
      })}
    </section>
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
        <CustomerRatings />
        {/* <RAM /> */}
        {/* <Features /> */}
      </div>
      {/** filtered product list */}
      <div className="mx-3 col-span-4">
        <ProductList />
      </div>
    </section>
  );
};

export default Electronics;
