import { screen } from "@testing-library/react";
import "jest-styled-components";

import Menu from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Menu/>", () => {
  it("should render the medium size by default", () => {
    renderWithTheme(<Menu />);

    expect(screen.getByRole("button", { name: /by now/i })).toHaveStyle({
      height: "4rem",
      padding: "0.8rem 3.2rem",
      "font-size": "1.4rem",
    });
  });
});
