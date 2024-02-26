import ReactSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderProps } from "./types";
import { sliderStyles } from "./styles";

export const Slider = ({ children }: SliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    className: sliderStyles,
  };

  return <ReactSlider {...settings}>{children}</ReactSlider>;
};
