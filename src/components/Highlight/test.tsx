import { screen } from "@testing-library/react";
import "jest-styled-components";

import Highlight from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

const props = {
  title: "heading 1",
  subtitle: "subtitle 1",
  buttonLabel: "Buy now",
  buttonLink: "/rdr2",
};

describe("<Highlight/>", () => {
  it("should render the headings and buttons", () => {
    renderWithTheme(<Highlight {...props} />);
    expect(
      screen.getByRole("heading", { name: /heading 1/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /subtitle 1/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /buy now/i })).toBeInTheDocument();
  });
});
