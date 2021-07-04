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

describe("<Home/>", () => {
  it("should render menu and footer", () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /contact us/i })
    ).toBeInTheDocument();
  });
  it("should render the sections", () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByRole("heading", { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /up comming/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /most popular/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /free games/i })
    ).toBeInTheDocument();
  });
});
