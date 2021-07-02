import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import GameCardSlider from ".";
// import { renderWithTheme } from "../../utils/tests/helpers";

describe("<GameCardSlider/>", () => {
  it("should render the medium size by default", () => {
    render(<GameCardSlider />);
    expect(
      screen.getByRole("heading", { name: /GameCardSlider/i })
    ).toBeInTheDocument();
  });
});
