import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/globals";
import theme from "styles/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
