import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBigRight } from "lucide-react";
import "./ImageSlider.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} custom-arrow custom-next`}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
      }}
    >
      <ArrowBigRight className="text-blue-500" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} custom-arrow custom-prev`}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
      }}
    >
      <ArrowBigRight className="text-blue-500" />
    </div>
  );
};

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img
            src="https://plus.unsplash.com/premium_photo-1661863169689-29ea9d0a17f2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Strength"
          />
          <div className="label">STRENGTH</div>
        </div>
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1603988533324-9e39be986394?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mobility"
          />
          <div className="label">MOBILITY</div>
        </div>
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1534096210335-a3b961613bb5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Drills"
          />
          <div className="label">DRILLS</div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
