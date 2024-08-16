import React from "react";
import "./werdeslider.scss";

import Slider from "react-slick";

export default function Werdeslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };
  return (
    <div className="werde-slider-section-main">
      <div className="werde-slider-main">
        <Slider {...settings}>
            <div>
                <div></div>
            </div>
        </Slider>
      </div>
    </div>
  );
}
