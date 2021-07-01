import { screen } from "@testing-library/react";
import "jest-styled-components";
import * as S from "../Highlight/styles";

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
  it("should render align right by default", () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas: "floatimage content"'
    );
    expect(container.firstChild).toHaveStyleRule("text-align", "right", {
      modifier: `${S.Content}`,
    });
  });

  it("should render align left by default", () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas: " content floatimage"'
    );
    expect(container.firstChild).toHaveStyleRule("text-align", "left", {
      modifier: `${S.Content}`,
    });
  });
});
