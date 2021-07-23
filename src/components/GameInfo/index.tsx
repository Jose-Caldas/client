import Button from "../Button";
import * as S from "./styles";
import {
    AddShoppingCart,
    FavoriteBorder,
} from "@styled-icons/material-outlined";
import Heading from "../Heading";
import Ribbon from "../Ribbon";
import { formatPrice } from "../../utils/format-price";

export type GameInfoProps = {
    title: string;
    description: string;
    price: number;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => (
    <S.Wrapper>
        <Heading color="black" lineBottom>
            {title}
        </Heading>

        <Ribbon color="secondary">
            {price > 0 ? formatPrice(price) : <span>FREE</span>}
        </Ribbon>

        <S.Description>{description}</S.Description>

        <S.ButtonsWrapper>
            <Button icon={<AddShoppingCart />} size="large">
                Add to cart
            </Button>
            <Button minimal icon={<FavoriteBorder />} size="large">
                Wishlist
            </Button>
        </S.ButtonsWrapper>
    </S.Wrapper>
);

export default GameInfo;
