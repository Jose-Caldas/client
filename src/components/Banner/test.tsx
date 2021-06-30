import { screen } from "@testing-library/react";
import "jest-styled-components";

import Banner from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

const props = {
  img: "https://source.unsplash.com/user/willianjusten/1042x580",
  title: "Defy death",
  subtitle: "<p>Play the new <strong>CrashLands</strong> season",
  buttonLabel: "Buy now",
  buttonLink: "/games/defy-death",
};

// verifique se o title existe renderizado (.toBeInTheDocument())
// verifique se o subtitle existe renderizado
// verifique se a imagem existe renderizado

describe("<Banner />", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(
      screen.getByRole("heading", { name: /Defy death/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: /Defy death/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render a Ribbon", () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="20% Off"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );
    const ribbon = screen.getByText(/20% Off/i);
    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: "#3CD3C1" });
    expect(ribbon).toHaveStyle({
      height: "2.6rem",
      "font-size": "1.2rem",
    });
  });
});
