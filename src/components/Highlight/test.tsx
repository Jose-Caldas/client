import { screen } from "@testing-library/react";
import "jest-styled-components";

import Highlight from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

const props = {
  title: "heading 1",
  subtitle: "subtitle 1",
  buttonLabel: "Buy now",
  buttonLink: "/rdr2",
  backgroundImage: "img/red-dead-img.jpg",
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
  it("should render background image", () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    });
  });
  it("should render float image", () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />);

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      "/float-image.png"
    );
  });
});
