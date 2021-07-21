import { screen } from "@testing-library/react";
import "jest-styled-components";
import userEvent from "@testing-library/user-event";

import UserDropdown from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<UserDropdown/>", () => {
    it("should render the username", () => {
        renderWithTheme(<UserDropdown username="Jhon" />);
        expect(screen.getByText(/Jhon/i)).toBeInTheDocument();
    });

    it("should render the menu", () => {
        renderWithTheme(<UserDropdown username="Jhon" />);

        // open menu
        userEvent.click(screen.getByText(/jhon/i));

        expect(
            screen.getByRole("link", { name: /my profile/i })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: /wishlist/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /sign out/i })
        ).toBeInTheDocument();
    });
});
