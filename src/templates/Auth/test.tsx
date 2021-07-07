import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import Auth from ".";
// import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Auth/>", () => {
  it("should render the medium size by default", () => {
    render(<Auth />);
    expect(screen.getByRole("heading", { name: /Auth/i })).toBeInTheDocument();
  });
});
