import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import UserDropdown from ".";
// import { renderWithTheme } from "../../utils/tests/helpers";

describe("<UserDropdown/>", () => {
    it("should render the medium size by default", () => {
        render(<UserDropdown username="Jhon" />);
        expect(
            screen.getByRole("heading", { name: /UserDropdown/i })
        ).toBeInTheDocument();
    });
});
