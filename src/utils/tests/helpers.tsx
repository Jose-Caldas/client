import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";
import theme from "../../styles/theme";

//provider para renderizar testes em realeção ao tema criado no projeto (theme.ts)

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
