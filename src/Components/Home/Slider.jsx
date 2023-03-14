import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { sliderData } from "../../Data";

const slider = (
  <AwesomeSlider className="h-96 mt-8">
    {sliderData.map((link) => {
      return <div data-src={link} key={link} />;
    })}
  </AwesomeSlider>
);

const Carousel = () => {
  return <div>{slider}</div>;
};

export default Carousel;
