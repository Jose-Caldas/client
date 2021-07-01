import {
  Wrapper,
  ImageBox,
  GameInfo,
  Title,
  Developer,
  FavButton,
  BuyBox,
  Price,
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
};
const GameCard = ({ img, title, developer, price }: GameCardProps) => (
  <Wrapper>
    <ImageBox>
      <img src={img} alt={title} />
    </ImageBox>
    <GameInfo>
      <Title>{title}</Title>
      <Developer>{developer}</Developer>
    </GameInfo>
    <FavButton role="button">
      <FavoriteBorder aria-label="Add to Wishlist" />
    </FavButton>
    <BuyBox>
      <Price>{price}</Price>
      <Button icon={<AddShoppingCart />} size="small" />
    </BuyBox>
  </Wrapper>
);

export default GameCard;
