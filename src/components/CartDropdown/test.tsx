import { screen } from "@testing-library/react";
import "jest-styled-components";
import { renderWithTheme } from "../../utils/tests/helpers";
import CartDropdown from ".";

import items from "../CartList/mock";

describe("<CartDropdown />", () => {
    it("should render <CartIcon /> and its badge", () => {
        renderWithTheme(<CartDropdown items={items} total="R$ 430,00" />);

        expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
        expect(screen.getByText(`${items.length}`)).toBeInTheDocument();
    });

    it("should render Dropdown content with cart items and total", () => {
        renderWithTheme(<CartDropdown items={items} total="R$ 430,00" />);

        expect(screen.getByText("R$ 430,00")).toBeInTheDocument();
        expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument();
    });
});
