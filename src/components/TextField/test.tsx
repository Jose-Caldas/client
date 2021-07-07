import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";

import TextField from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<TextField />", () => {
  it("should render with Label", () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />);

    expect(screen.getByLabelText("Label")).toBeInTheDocument();
  });

  it("should render without Label", () => {
    renderWithTheme(<TextField />);
    expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
  });

  it("should render with a placeholder", () => {
    renderWithTheme(<TextField placeholder="E-mail" />);
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
  });

  it("Changes its value when typing", async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    );

    const input = screen.getByRole("textbox");
    const text = "This is my new text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it("Is accessible by tab", () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    );

    const input = screen.getByLabelText("TextField");
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
