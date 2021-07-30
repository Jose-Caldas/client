import Button from "../Button";
import * as S from "./styles";
import { FavoriteBorder } from "@styled-icons/material-outlined";
import Heading from "../Heading";
import Ribbon from "../Ribbon";
import { formatPrice } from "../../utils/format-price";
import CartButton from "../CartButton";

export type GameInfoProps = {
    id: string;
    title: string;
    description: string;
    price: number;
};

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
    <S.Wrapper>
        <Heading color="black" lineBottom>
            {title}
        </Heading>

        <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

        <S.Description>{description}</S.Description>

        <S.ButtonsWrapper>
            <CartButton id={id} size="large" hasText />
            <Button minimal icon={<FavoriteBorder />} size="large">
                Wishlist
            </Button>
        </S.ButtonsWrapper>
    </S.Wrapper>
);

export default GameInfo;
