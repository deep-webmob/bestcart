import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const slider = (
  <AwesomeSlider className="h-96 mt-8">
    <div data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/withouttag/Credit-Card-Bill_1500x300_PC-OLP.jpg" />
    <div data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Surbhi/2021/MAY/MAYGTM/Headers/header_pc_1.jpg" />
    <div data-src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg" />
  </AwesomeSlider>
);

const Carousel = () => {
  return <div>{slider}</div>;
};

export default Carousel;
