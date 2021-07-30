import Link from "next/link";
import * as S from "./styles";
import { FavoriteBorder, Favorite } from "@styled-icons/material-outlined";
import { ReactNode } from "react";
import Ribbon, { RibbonColors, RibbonSizes } from "../Ribbon";
import { formatPrice } from "../../utils/format-price";
import CartButton from "../CartButton";

export type GameCardProps = {
    id: string;
    slug: string;
    img: string;
    title: string;
    developer: string;
    price: number;
    promotionalPrice?: number;
    favorite?: boolean;
    onFav?: () => void;
    ribbon?: ReactNode;
    ribbonSize?: RibbonSizes;
    ribbonColor?: RibbonColors;
};
const GameCard = ({
    id,
    img,
    title,
    developer,
    price,
    promotionalPrice,
    favorite = false,
    onFav,
    ribbon,
    ribbonColor = "primary",
    ribbonSize = "small",
    slug,
}: GameCardProps) => (
    <S.Wrapper>
        {!!ribbon && (
            <Ribbon color={ribbonColor} size={ribbonSize}>
                {ribbon}
            </Ribbon>
        )}

        <Link href={`game/${slug}`} passHref>
            <S.ImageBox>
                <img src={img} alt={title} />
            </S.ImageBox>
        </Link>
        <S.Content>
            <Link href={`game/${slug}`} passHref>
                <S.GameInfo>
                    <S.Title>{title}</S.Title>
                    <S.Developer>{developer}</S.Developer>
                </S.GameInfo>
            </Link>
            <S.FavButton role="button" onClick={onFav}>
                {favorite ? (
                    <Favorite aria-label="Remove from Wishlist" />
                ) : (
                    <FavoriteBorder aria-label="Add to Wishlist" />
                )}
            </S.FavButton>
            {
                <S.BuyBox>
                    {!!promotionalPrice && (
                        <S.Price isPromotional>{formatPrice(price)}</S.Price>
                    )}
                    <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
                    <CartButton id={id} />
                </S.BuyBox>
            }
        </S.Content>
    </S.Wrapper>
);

export default GameCard;
