import { screen } from "@testing-library/react";
import "jest-styled-components";

import GameInfo from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

const props = {
    title: "Borderlands 3",
    description: "Experience the epic space strategy",
    price: "240,00",
};

describe("<GameInfo/>", () => {
    it("should render game informations", () => {
        const { container } = renderWithTheme(<GameInfo {...props} />);
        //Heading
        expect(
            screen.getByRole("heading", { name: /Borderlands 3/i })
        ).toBeInTheDocument();
        //Description
        expect(
            screen.getByText(/Experience the epic space strategy/i)
        ).toBeInTheDocument();
        //Price
        expect(screen.getByText(/240/i)).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
    it("should render buttons", () => {
        renderWithTheme(<GameInfo title="won" />);

        //button add to cart
        expect(
            screen.getByRole("button", { name: /add to cart/i })
        ).toBeInTheDocument();
        //button wishlist
        expect(
            screen.getByRole("button", { name: /wishlist/i })
        ).toBeInTheDocument();
    });
});
