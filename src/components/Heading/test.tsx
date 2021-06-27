import { screen } from "@testing-library/react";
import "jest-styled-components";

//Testes: verficar se o componente está renderizando a tag <h2> - heading, color(white and black), lineLeft(border-left),lineBottom(border-bottom)

import Heading from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Heading/>", () => {
  it("should render a white heading by default", () => {
    renderWithTheme(<Heading>Won Games</Heading>);
    expect(screen.getByRole("heading", { name: /Won Games/i })).toHaveStyle({
      color: "#FAFAFA",
    });
  });
  it("should render a black heading when a color is passed", () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);
    expect(screen.getByRole("heading", { name: /Won Games/i })).toHaveStyle({
      color: "#030517",
    });
  });
  it("should render heading with a line to left side", () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);
    expect(screen.getByRole("heading", { name: /Won Games/i })).toHaveStyle({
      "border-left": "0.7rem solid #3CD3C1",
    });
  });
  it("should render heading with a line at the bottom", () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);
    expect(screen.getByRole("heading", { name: /Won Games/i })).toHaveStyleRule(
      "border-bottom",
      "0.5rem solid #F231A5",
      {
        modifier: "::after",
      }
    );
  });
});
