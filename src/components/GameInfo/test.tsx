import { render, screen } from "../../utils/test-utils";

import "jest-styled-components";

import GameInfo from ".";

const props = {
    id: "1",
    title: "Borderlands 3",
    description: "Experience the epic space strategy",
    price: 240,
};

describe("<GameInfo/>", () => {
    it("should render game informations", () => {
        const { container } = render(<GameInfo {...props} />);
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
        render(<GameInfo {...props} title="won" />);

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
