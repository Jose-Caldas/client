import { screen } from "@testing-library/react";
import "jest-styled-components";

import FormSignIn from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<FormSignIn />", () => {
  it("should render the form", () => {
    // verifique email
    // verifique password
    // verifique button
    renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign in now/i })
    ).toBeInTheDocument();
  });

  it("should render the forgot password link", () => {
    renderWithTheme(<FormSignIn />);

    expect(
      screen.getByRole("link", { name: /forgot your password\?/i })
    ).toBeInTheDocument();
  });

  it("should render text to sign up if already have an account", () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByRole("link", { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByText(/don’t have an account\?/i)).toBeInTheDocument();
  });
});
