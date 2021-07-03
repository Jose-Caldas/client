import { screen } from "@testing-library/react";
import "jest-styled-components";

import Home from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Home/>", () => {
  it("should render menu and footer", () => {
    renderWithTheme(<Home />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /contact us/i })
    ).toBeInTheDocument();
  });
  it("should render the sections", () => {
    renderWithTheme(<Home />);

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
