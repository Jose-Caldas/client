import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import GameCard from ".";
// import { renderWithTheme } from "../../utils/tests/helpers";

//renderizar o card
//verificar se o title foi renderizado
//verificar se o developer foi renderizado
//verificar se a img foi renderizado
//verificar se o price foi renderizado

describe("<GameCard/>", () => {
  it("should render correctly", () => {
    render(<GameCard />);
    expect(
      screen.getByRole("heading", { name: /GameCard/i })
    ).toBeInTheDocument();
  });
});
