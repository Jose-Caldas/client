import Heading from "../Heading";
import Radio from "../Radio";
import * as S from "./styles";
import { Add, ShoppingCart } from "@styled-icons/material-outlined";
import Button from "../Button";

export type PaymentCard = {
    number: string;
    flag: string;
    img: string;
};

export type PaymentOptionsProps = {
    cards?: PaymentCard[];
    handlePayment: () => void;
};

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => (
    <S.Wrapper>
        <S.Body>
            <Heading lineBottom color="black" size="small">
                Payment
            </Heading>
            <S.CardsList>
                {cards?.map((card) => (
                    <S.CardItem key={card.number} {...card}>
                        <S.CardInfo>
                            <img src={card.img} alt={card.flag} />
                            {card.number}
                            <Radio
                                name="credit-card"
                                id={card.number}
                                value={card.number}
                                onCheck={() => ({})}
                            />
                        </S.CardInfo>
                    </S.CardItem>
                ))}
                <S.AddCard role="button">
                    <Add size={14} /> Add a new credit card
                </S.AddCard>
            </S.CardsList>
        </S.Body>
        <S.Footer>
            <Button as="a" fullWidth minimal>
                Continue shopping
            </Button>
            <Button fullWidth icon={<ShoppingCart />} onClick={handlePayment}>
                Buy now
            </Button>
        </S.Footer>
    </S.Wrapper>
);

export default PaymentOptions;
