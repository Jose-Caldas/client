import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr
    max-width: ${theme.grid.container};
    height: 100vh;
    
  `}
`;

export const BannerBlock = styled.div``;

export const Subtitle = styled.h3``;

export const Footer = styled.p``;

export const BannerContent = styled.div`
  font-weight: bold;
`;
