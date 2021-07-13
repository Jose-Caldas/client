import { screen } from "@testing-library/react";
import "jest-styled-components";
import { renderWithTheme } from "../../utils/tests/helpers";

jest.mock("components/Menu", () => {
    return {
        __esModule: true,
        default: function mock() {
            return <div data-testid="Mock Menu"></div>;
        },
    };
});
jest.mock("components/Footer", () => {
    return {
        __esModule: true,
        default: function mock() {
            return <div data-testid="Mock Footer"></div>;
        },
    };
});

import Base from ".";

describe("<Base/>", () => {
    it("should render menu, footer and children", () => {
        renderWithTheme(
            <Base>
                <h1>Heading</h1>
            </Base>
        );

        expect(screen.getByTestId("Mock Menu")).toBeInTheDocument();
        expect(screen.getByTestId("Mock Footer")).toBeInTheDocument();
        expect(
            screen.getByRole("heading", { name: /heading/i })
        ).toBeInTheDocument();
    });
});
