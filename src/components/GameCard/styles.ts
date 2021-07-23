import styled, { css, DefaultTheme } from "styled-components";

export const Wrapper = styled.article`
    ${({ theme }) => css`
        position: relative;

        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;
        background-color: ${theme.colors.white};
    `}
`;

export const ImageBox = styled.a`
    min-height: 14rem;
    position: relative;
    width: 100%;
    background: #f6f7f8;
    background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @keyframes placeholderShimmer {
        0% {
            background-position: -40rem 0;
        }
        100% {
            background-position: 40rem 0;
        }
    }
`;
export const Content = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        height: 100%;
        margin: ${theme.spacings.xsmall};
    `}
`;

export const GameInfo = styled.a`
    max-width: calc(100% - 2.5rem);
    text-decoration: none;
`;
export const Title = styled.h3`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};
        line-height: ${theme.font.sizes.medium};
        font-weight: ${theme.font.bold};
        color: ${theme.colors.black};
    `}
`;
export const Developer = styled.h4`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
        color: ${theme.colors.gray};
    `}
`;
export const FavButton = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.primary};
        position: absolute;
        right: -0.1rem;
        top: -0.5rem;
        cursor: pointer;

        svg {
            width: 2.5rem;
        }
    `}
`;
export const BuyBox = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: ${theme.spacings.xxsmall};

        span {
            background-color: ${theme.colors.secondary};
            color: ${theme.colors.white};
            padding: 0.6rem ${theme.spacings.xsmall};
            font-weight: ${theme.font.bold};

            border: none;
            border-radius: ${theme.border.radius};
        }
    `}
`;

export type PriceProps = {
    isPromotional?: boolean;
};

const priceModifiers = {
    default: (theme: DefaultTheme) => css`
        color: ${theme.colors.white};
        padding: 0 ${theme.spacings.xxsmall};
        margin-right: ${theme.spacings.xxsmall};
        border-radius: ${theme.border.radius};
        background: ${theme.colors.secondary};
    `,
    promotional: (theme: DefaultTheme) => css`
        color: ${theme.colors.gray};
        text-decoration: line-through;
        font-style: italic;
        margin-right: ${theme.spacings.xxsmall};
    `,
};

export const Price = styled.div<PriceProps>`
    ${({ theme, isPromotional }) => css`
        display: inline-flex;
        font-weight: ${theme.font.bold};
        height: 3rem;
        align-items: center;

        ${isPromotional && priceModifiers.promotional(theme)}
        ${!isPromotional && priceModifiers.default(theme)}
    `}
`;
