import * as S from "./styles";
import { ShoppingCart } from "@styled-icons/material-outlined/ShoppingCart";

export type CartIconProps = {
    quantity?: number;
};

const CarIcon = ({ quantity = 0 }: CartIconProps) => (
    <S.Wrapper>
        {quantity > 0 && <S.Badge aria-label="Cart items">{quantity}</S.Badge>}
        <ShoppingCart aria-label="Shopping Cart" />
    </S.Wrapper>
);

export default CarIcon;
