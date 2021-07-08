import { screen } from "@testing-library/react";
import "jest-styled-components";

import Auth from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Auth/>", () => {
  it("should render logos, headings, title, subtitle, footer and children", () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" name="" id="" />
      </Auth>
    );

    // verificar se tem dois logos
    expect(screen.getAllByRole("img", { name: /won games/i })).toHaveLength(2);

    //verificar se tem headings
    expect(
      screen.getByRole("heading", {
        name: /All your favorite games in one place/i,
      })
    ).toBeInTheDocument();

    // verificar subtitle
    expect(
      screen.getByRole("heading", {
        name: /is the best and most complete gaming platform/i,
      })
    ).toBeInTheDocument();

    //verificar title
    expect(
      screen.getByRole("heading", {
        name: /Auth title/i,
      })
    ).toBeInTheDocument();

    // verifica se o children tá sendo renderizado
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
