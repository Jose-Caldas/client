import { render, screen } from "@testing-library/react";
import "jest-styled-components";
// import { renderWithTheme } from "../../utils/tests/helpers";
import PaymentOptions from ".";

describe("<PaymentOptions />", () => {
    it("should render the heading", () => {
        const { container } = render(<PaymentOptions />);

        expect(
            screen.getByRole("heading", { name: /PaymentOptions/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
