import CartList, { CartListProps } from "../../components/CartList";
import { Container } from "../../components/Container";
import { Divider } from "../../components/Divider";
import Empty from "../../components/Empty.tsx";
import { GameCardProps } from "../../components/GameCard";
import Heading from "../../components/Heading";
import { HighlightProps } from "../../components/Highlight";
import PaymentOptions, {
    PaymentOptionsProps,
} from "../../components/PaymentOptions";
import Showcase from "../../components/Showcase";
import Base from "../Base";
import * as S from "./styles";

export type CartTemplateProps = {
    recommendedGames: GameCardProps[];
    recommendedHighlight: HighlightProps;
} & CartListProps &
    Pick<PaymentOptionsProps, "cards">;

const Cart = ({
    recommendedGames,
    recommendedHighlight,
    items,
    total,

    cards,
}: CartTemplateProps) => {
    const handlePayment = () => {
        ({});
    };
    return (
        <Base>
            <Container>
                <Heading lineLeft lineColor="secondary">
                    My cart
                </Heading>

                {items.length >= 1 ? (
                    <S.Content>
                        <CartList items={items} total={total} />
                        <PaymentOptions
                            cards={cards}
                            handlePayment={handlePayment}
                        />
                    </S.Content>
                ) : (
                    <Empty
                        title="Your cart is empty"
                        description="Go back to the home and explore great games and offers"
                        hasLink
                    />
                )}

                <Divider />
            </Container>

            <Showcase
                title="You may like this games"
                games={recommendedGames}
                highlight={recommendedHighlight}
            />
        </Base>
    );
};

export default Cart;
