import Cart, { CartTemplateProps } from "../templates/Cart";
import mockItems from "../components/CartList/mock";
import cardsMock from "../components/PaymentOptions/mock";
import { initializeApollo } from "../utils/apollo";
import { QueryRecommended } from "../graphql/generated/QueryRecommended";
import { QUERY_RECOMMENDED } from "../graphql/queries/recommended";
import { gamesMapper, highlightMapper } from "../utils/mappers";

function CartPage(props: CartTemplateProps) {
    return <Cart {...props} />;
}

export async function getServerSideProps() {
    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query<QueryRecommended>({
        query: QUERY_RECOMMENDED,
    });

    return {
        props: {
            recommendedGames: gamesMapper(data.recommended?.section?.games),
            recommendedTitle: data.recommended?.section?.title,
            recommendedHighlight: highlightMapper(
                data.recommended?.section?.highlight
            ),
            items: mockItems,
            total: "$ 430,00",
            cards: cardsMock,
        },
    };
}

export default CartPage;
