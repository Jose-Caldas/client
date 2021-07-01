import {
  Wrapper,
  ImageBox,
  GameInfo,
  Title,
  Developer,
  FavButton,
  BuyBox,
  Price,
  Content,
} from "./styles";
import {
  AddShoppingCart,
  FavoriteBorder,
} from "@styled-icons/material-outlined";
import Button from "../Button";

export type GameCardProps = {
  img: string;
  title: string;
  developer: string;
  price: string;
  promotionalPrice?: string;
};
const GameCard = ({
  img,
  title,
  developer,
  price,
  promotionalPrice,
}: GameCardProps) => (
  <Wrapper>
    <ImageBox>
      <img src={img} alt={title} />
    </ImageBox>
    <Content>
      <GameInfo>
        <Title>{title}</Title>
        <Developer>{developer}</Developer>
      </GameInfo>
      <FavButton role="button">
        <FavoriteBorder aria-label="Add to Wishlist" />
      </FavButton>
      <BuyBox>
        {!!promotionalPrice && <Price isPromotional>{price}</Price>}
        <Price>{promotionalPrice || price}</Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </BuyBox>
    </Content>
  </Wrapper>
);

export default GameCard;
