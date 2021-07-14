import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import Ribbon from ".";
// import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Ribbon/>", () => {
  it("should render the medium size by default", () => {
    render(<Ribbon />);
    expect(
      screen.getByRole("heading", { name: /Ribbon/i })
    ).toBeInTheDocument();
  });
});
