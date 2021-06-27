import { screen } from "@testing-library/react";

//renderizar o component 'render'
//selecionar o elemento 'screen' (queries) - getByLabel, getByText ...
//expect - assertion - assercão, análise, comparação (neste caso renderizar a logo branca e label Won Games - acessibilidade)

import Logo from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Logo/>", () => {
  it("should render a white label by default", () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: "#FAFAFA",
    });
  });
  it("should render a black label when color is passed", () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: "#030517",
    });
  });
});
