import { screen } from "@testing-library/react";
import "jest-styled-components";
import "../../../.jest/match-media-mock";

import { renderWithTheme } from "../../utils/tests/helpers";

import bannersMock from "../../components/BannerSlider/mock";
import gamesMock from "../../components/GameCardSlider/mock";
import highlightMock from "../../components/Highlight/mock";

import Home from ".";

const props = {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
    upcommingGames: gamesMock,
    upcommingHighlight: highlightMock,
    freeGames: gamesMock,
    freeHighlight: highlightMock,
};

//mock para otimizar teste

jest.mock("components/Showcase", () => {
    return {
        __esModule: true,
        default: function mock() {
            return <div data-testid="Mock Showcase"></div>;
        },
    };
});
jest.mock("components/BannerSlider", () => {
    return {
        __esModule: true,
        default: function mock() {
            return <div data-testid="Mock BannerSlider"></div>;
        },
    };
});

describe("<Home/>", () => {
    it("should render Banner and Showcase", () => {
        renderWithTheme(<Home {...props} />);

        // banner
        expect(screen.getByTestId("Mock BannerSlider")).toBeInTheDocument();

        //Showcase
        expect(screen.getAllByTestId("Mock Showcase")).toHaveLength(4);
    });
});
