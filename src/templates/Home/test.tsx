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
    upcommingMoreGames: gamesMock,
    freeGames: gamesMock,
    freeHighlight: highlightMock,
};

//mock para otimizar teste
jest.mock("components/Menu", () => {
    return {
        __esModule: true,
        default: function mock() {
            return <div data-testid="Mock Menu"></div>;
        },
    };
});
jest.mock("components/Footer", () => {
    return {
        __esModule: true,
        default: function mock() {
            return <div data-testid="Mock Footer"></div>;
        },
    };
});
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
    it("should render menu and footer", () => {
        renderWithTheme(<Home {...props} />);

        //Menu
        expect(screen.getByTestId("Mock Menu")).toBeInTheDocument();

        // banner
        expect(screen.getByTestId("Mock BannerSlider")).toBeInTheDocument();

        //Showcase
        expect(screen.getAllByTestId("Mock Showcase")).toHaveLength(5);

        //Footer
        expect(screen.getByTestId("Mock Footer")).toBeInTheDocument();
    });
});
