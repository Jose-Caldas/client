import { screen } from "@testing-library/react";

import "jest-styled-components";

import ProfileMenu, { ProfileMenuProps } from ".";
import theme from "../../styles/theme";
import { renderWithTheme } from "../../utils/tests/helpers";

const props: ProfileMenuProps = {
    activeLink: "/profile/cards",
};

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

    it("should render the menu with a active link defined", () => {
        renderWithTheme(<ProfileMenu {...props} activeLink="/profile/cards" />);

        expect(screen.getByRole("link", { name: /my cards/i })).toHaveStyle({
            background: theme.colors.primary,
            color: theme.colors.white,
        });
    });
});
