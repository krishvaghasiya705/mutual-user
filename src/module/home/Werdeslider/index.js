import React, { useRef } from "react";
import "./werdeslider.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Werdeslidermobileone from "../../../assets/image/werdeslidemobileone.png";

export default function Werdeslider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.17,
    slidesToScroll: 1,
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="werde-slider-section-main">
      <div className="werde-slider-main">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <div>
              <div>
                <img src={Werdeslidermobileone} alt="Werdeslider image 1" />
              </div>
              <div className="custom-slider-dots">
                <span className="dot active" onClick={() => goToSlide(0)}></span>
                <span className="dot" onClick={() => goToSlide(1)}></span>
                <span className="dot" onClick={() => goToSlide(2)}></span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img src={Werdeslidermobileone} alt="Werdeslider image 2" />
              </div>
              <div className="custom-slider-dots">
                <span className="dot" onClick={() => goToSlide(0)}></span>
                <span className="dot active" onClick={() => goToSlide(1)}></span>
                <span className="dot" onClick={() => goToSlide(2)}></span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img src={Werdeslidermobileone} alt="Werdeslider image 3" />
              </div>
              <div className="custom-slider-dots">
                <span className="dot" onClick={() => goToSlide(0)}></span>
                <span className="dot" onClick={() => goToSlide(1)}></span>
                <span className="dot active" onClick={() => goToSlide(2)}></span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
