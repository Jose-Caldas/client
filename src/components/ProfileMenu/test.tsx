import { screen } from "@testing-library/react";

import "jest-styled-components";

import ProfileMenu from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<ProfileMenu />", () => {
    it("should render the menu", () => {
        const { container } = renderWithTheme(<ProfileMenu />);

        // verificar os 4 links existentes
        expect(
            screen.getByRole("link", { name: /my profile/i })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: /my cards/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /my orders/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /sign out/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
