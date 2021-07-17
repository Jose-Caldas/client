import "jest-styled-components";

import ProfileMenu from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<ProfileMenu />", () => {
    it("should render the menu", () => {
        renderWithTheme(<ProfileMenu />);

        // verificar os 4 links existentes
    });
});
