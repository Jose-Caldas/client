import { Settings } from "react-slick";
import Banner, { BannerProps } from "../Banner";
import Slider from "../Slider";
import { Wrapper } from "./styles";

export type BannerSliderProps = {
  items: BannerProps[];
};

const settings: Settings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170, //large do media query
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

const BannerSlider = ({ items }: BannerSliderProps) => (
  <Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} ribbonSize="normal" />
      ))}
    </Slider>
  </Wrapper>
);

export default BannerSlider;
