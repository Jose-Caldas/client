import { render, screen, waitFor } from "../../utils/test-utils";

import "jest-styled-components";

import Checkbox from ".";
import theme from "../../styles/theme";

import userEvent from "@testing-library/user-event";

describe("<Checkbox/>", () => {
    it("should render input and a label", () => {
        render(<Checkbox label="checkbox label" labelFor="check" />);

        //input apartir do papel/Role
        expect(screen.getByRole("checkbox")).toBeInTheDocument();

        //input apartir da label associada
        expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

        //label apartir do texto dela
        expect(screen.getByText(/checkbox label/i)).toHaveAttribute(
            "for",
            "check"
        );
    });

    it("should render without label", () => {
        render(<Checkbox />);

        expect(screen.queryByLabelText("checkbox")).not.toBeInTheDocument();
    });

    it("should render with black label", () => {
        render(
            <Checkbox
                label="checkbox label"
                labelFor="check"
                labelColor="black"
            />
        );

        expect(screen.getByText(/checkbox label/i)).toHaveStyle({
            color: theme.colors.black,
        });
    });

    it("should dispatch onCheck when status change", async () => {
        const onCheck = jest.fn();

        render(<Checkbox label="checkbox" onCheck={onCheck} />);

        expect(onCheck).not.toHaveBeenCalled();

        userEvent.click(screen.getByRole("checkbox"));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1);
        });
        expect(onCheck).toHaveBeenCalledWith(true);
    });

    it("should checkbox is checked by default", async () => {
        const onCheck = jest.fn();

        render(<Checkbox label="checkbox" onCheck={onCheck} isChecked />);

        userEvent.click(screen.getByRole("checkbox"));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1);
        });
        expect(onCheck).toHaveBeenCalledWith(false);
    });

    it("should accessible with tab", () => {
        const { container } = render(
            <Checkbox label="checkbox" labelFor="checkbox" />
        );

        expect(document.body).toHaveFocus();

        userEvent.tab();

        expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();

        expect(container.firstChild).toMatchSnapshot();
    });
});
