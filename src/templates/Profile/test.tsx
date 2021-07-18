import { screen } from "@testing-library/react";
import "jest-styled-components";

import Profile from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Profile/>", () => {
    it("should render the medium size by default", () => {
        renderWithTheme(
            <Profile>
                <h1>Profile</h1>
            </Profile>
        );
    });
});
