import { screen } from "@testing-library/react";
import "jest-styled-components";

import Menu from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

import Logo from "../Logo";

describe("<Menu/>", () => {
  it("should render the menu", () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  });
  it("should render a logo on menu", () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement);
  });
});
