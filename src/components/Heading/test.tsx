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
      "border-left": "0.7rem solid #F231A5",
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
  it("should render a heading with a small size", () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>);
    expect(screen.getByRole("heading", { name: /Won Games/i })).toHaveStyle({
      "font-size": "1.6rem",
    });
  });
  it("should render heading with a line at the bottom", () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>);
    expect(screen.getByRole("heading", { name: /Won Games/i })).toHaveStyleRule(
      "width",
      "3rem",
      {
        modifier: "::after",
      }
    );
  });
  it("should render a Heading with a primary line color", () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole("heading", { name: /Won Games/i });
    expect(heading).toHaveStyle({ "border-left": "0.7rem solid #F231A5" });
    expect(heading).toHaveStyleRule("border-bottom", "0.5rem solid #F231A5", {
      modifier: "::after",
    });
  });

  it("should render a Heading with a secondary line color", () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole("heading", { name: /Won Games/i });
    expect(heading).toHaveStyle({ "border-left": "0.7rem solid #3CD3C1" });
    expect(heading).toHaveStyleRule("border-bottom", "0.5rem solid #3CD3C1", {
      modifier: "::after",
    });
  });
});
