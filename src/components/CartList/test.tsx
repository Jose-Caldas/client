import { screen } from "@testing-library/react";
import "jest-styled-components";
import CartList from ".";
import mockItems from "./mock";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<CartList />", () => {
    it("should render the cart list", () => {
        const { container } = renderWithTheme(
            <CartList items={mockItems} total="R$ 430,00" />
        );

        expect(screen.getAllByRole("heading")).toHaveLength(2);
        expect(screen.getByText("R$ 430,00")).toHaveStyle({ color: "#F231A5" });

        expect(container.firstChild).toMatchSnapshot();
    });
    it("should render the button", () => {
        renderWithTheme(
            <CartList items={mockItems} total="R$ 430,00" hasButton />
        );

        expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
    });
});
