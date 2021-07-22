import "jest-styled-components";
import "../../../.jest/match-media-mock";

import GameCardSlider from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

const items = [
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        img: "https://source.unsplash.com/user/willianjusten/300x140",
        price: 235,
        promotionalPrice: 215,
        slug: "population-zero",
    },
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        img: "https://source.unsplash.com/user/willianjusten/300x141",
        price: 235,
        promotionalPrice: 215,
        slug: "population-zero",
    },
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        img: "https://source.unsplash.com/user/willianjusten/300x142",
        price: 235,
        promotionalPrice: 215,
        slug: "population-zero",
    },
    {
        title: "Population Zero",
        developer: "Rockstar Games",
        img: "https://source.unsplash.com/user/willianjusten/300x143",
        price: 235,
        promotionalPrice: 215,
        slug: "population-zero",
    },
];

describe("<GameSlider />", () => {
    it("should render 4 active items", () => {
        const { container } = renderWithTheme(<GameCardSlider items={items} />);
        expect(container.querySelectorAll(".slick-active")).toHaveLength(4);
    });
});
