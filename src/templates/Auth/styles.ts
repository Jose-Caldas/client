import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as HeadingStyles from "../../components/Heading/styles";
import * as LogoStyles from "../../components/Logo/styles";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan("medium")`
  grid-template-columns: 1fr 1fr;
  
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge};

    ${media.lessThan("medium")`
    display:none;
    `}

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.base};
    color: ${theme.colors.white};

    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    justify-content: space-between;
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.small};
    strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
  align-self: end;
  text-align: center;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
  ${media.greaterThan("medium")`
  width: 36rem;
  `}
`;

//Sign In
export const Form = styled.form`
  ${({ theme }) => css`
    h1 {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
      margin-top: ${theme.spacings.xxsmall};
      text-align: end;
      font-weight: ${theme.font.light};
      margin-bottom: ${theme.spacings.xxlarge};
      cursor: pointer;
    }
    h2 {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
      margin-top: ${theme.spacings.xsmall};
      text-align: center;
      font-weight: ${theme.font.bold};

      span {
        color: ${theme.colors.secondary};
        cursor: pointer;
      }

      &:hover span {
        border-bottom: 1px solid ${theme.colors.secondary};
      }
    }
  `}
`;
