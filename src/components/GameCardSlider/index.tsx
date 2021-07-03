import { Settings } from "react-slick";
import GameCard, { GameCardProps } from "../GameCard";
import Slider from "../Slider";
import { Wrapper } from "./styles";
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";

export type GameCardSliderProps = {
  items: GameCardProps[];
  color?: "white" | "black";
};

const settings: Settings = {
  arrows: true,
  slidesToShow: 4,
  nextArrow: <ArrowRight aria-label="Next Games" />,
  prevArrow: <ArrowLeft aria-label="Previous Games" />,
  infinite: false,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: true,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
};

const GameCardSlider = ({ items, color = "black" }: GameCardSliderProps) => (
  <Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </Wrapper>
);

export default GameCardSlider;
