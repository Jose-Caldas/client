import Cart, { CartTemplateProps } from "../templates/Cart";
import gamesMock from "../components/GameCardSlider/mock";
import highlightMock from "../components/Highlight/mock";
import mockItems from "../components/CartList/mock";
import cardsMock from "../components/PaymentOptions/mock";

function CartPage(props: CartTemplateProps) {
    return <Cart {...props} />;
}

export async function getServerSideProps() {
    return {
        props: {
            recommendedGames: gamesMock.slice(0, 5),
            recommendedHighlight: highlightMock,
            items: mockItems,
            total: "$ 430,00",
            cards: cardsMock,
        },
    };
}

export default CartPage;
