import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Email } from "@styled-icons/material-outlined/Email";

import "jest-styled-components";

import { renderWithTheme } from "../../utils/tests/helpers";
import TextField from ".";

describe("<TextField />", () => {
    it("should render with Label", () => {
        renderWithTheme(<TextField label="Label" name="label" />);

        expect(screen.getByLabelText("Label")).toBeInTheDocument();
    });

    it("should render without Label", () => {
        renderWithTheme(<TextField />);
        expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
    });

    it("should render with a placeholder", () => {
        renderWithTheme(<TextField placeholder="digite seu e-mail" />);
        expect(
            screen.getByPlaceholderText("digite seu e-mail")
        ).toBeInTheDocument();
    });

    it("should render with icon", () => {
        renderWithTheme(
            <TextField
                icon={<Email data-testid="icon" />}
                iconPosition="right"
            />
        );
        expect(screen.getByTestId("icon").parentElement).toHaveStyle({
            order: 1,
        });
    });
    it("should render with icon", () => {
        renderWithTheme(
            <TextField
                icon={<Email data-testid="icon" />}
                iconPosition="left"
            />
        );
        expect(screen.getByTestId("icon").parentElement).toHaveStyle({
            order: 0,
        });
    });
    it("should render with icon", () => {
        renderWithTheme(<TextField icon={<Email data-testid="icon" />} />);
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    //testar o valor qdo digitado
    it("Changes its value when typing", async () => {
        const onInput = jest.fn();
        renderWithTheme(
            <TextField onInput={onInput} label="TextField" name="TextField" />
        );

        const input = screen.getByRole("textbox");
        const text = "This is my new text";
        userEvent.type(input, text); // aonde digitar e o que digitar

        //verificar o tamanho do texto digitado
        await waitFor(() => {
            expect(input).toHaveValue(text);
            expect(onInput).toHaveBeenCalledTimes(text.length);
        });
        expect(onInput).toHaveBeenCalledWith(text);
    });

    it("Is accessible by tab", () => {
        renderWithTheme(<TextField label="TextField" name="TextField" />);

        const input = screen.getByLabelText("TextField");
        expect(document.body).toHaveFocus();

        userEvent.tab();
        expect(input).toHaveFocus();
    });
    it("Renders with error", () => {
        const { container } = renderWithTheme(
            <TextField
                icon={<Email data-testid="icon" />}
                label="TextField"
                name="TextField"
                error="Error message"
            />
        );

        expect(screen.getByText("Error message")).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
