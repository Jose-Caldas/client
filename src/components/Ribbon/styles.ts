import styled, { css, DefaultTheme } from "styled-components";
import { RibbonColors, RibbonProps } from ".";
import { darken } from "polished";

type WrapperProps = Omit<RibbonProps, "children">;

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
    right: -2rem;
    padding: 0 ${theme.spacings.small};

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
    right: -1.5rem;
    padding: 0 ${theme.spacings.xsmall};

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    position: absolute;
    top: 1.6rem;

    &::before {
      content: "";
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!size && wrapperModifiers[size](theme)};
  `}
`;
