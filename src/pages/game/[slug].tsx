import { useRouter } from "next/router";
import { initializeApollo } from "../../utils/apollo";
import Game, { GameTemplateProps } from "../../templates/Game";
import gamesMock from "../../components/GameCardSlider/mock";
import highlightMock from "../../components/Highlight/mock";
import {
    QueryGames,
    QueryGamesVariables,
} from "../../graphql/generated/QueryGames";
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from "../../graphql/queries/games";
import {
    QueryGameBySlug,
    QueryGameBySlugVariables,
} from "../../graphql/generated/QueryGameBySlug";
import { GetStaticProps } from "next";

const apolloClient = initializeApollo();

function Index(props: GameTemplateProps) {
    const router = useRouter();
    // se  a rota não tiver sido criada ainda
    //vc pode mostrar um loading/ uma tela de esqueleto
    if (router.isFallback) return null;

    return <Game {...props} />;
}

//gerar em build time (/game/tal...)  gerar as paths/rotas
export async function getStaticPaths() {
    const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
        query: QUERY_GAMES,
        variables: { limit: 9 },
    });

    const paths = data.games.map(({ slug }) => ({ params: { slug } }));
    return { paths, fallback: true };
}

//passar os dados de forma estática no momento de gerar a página
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data } = await apolloClient.query<
        QueryGameBySlug,
        QueryGameBySlugVariables
    >({
        query: QUERY_GAME_BY_SLUG,
        variables: { slug: `${params?.slug}` },
    });

    if (!data.games.length) {
        return { notFound: true };
    }

    const game = data.games[0];

    return {
        revalidate: 60,
        props: {
            cover: `http://localhost:1337${game.cover?.src}`,
            gameInfo: {
                title: game.name,
                price: game.price,
                description: game.short_description,
            },
            gallery: game.gallery.map((image) => ({
                src: `http://localhost:1337${image.src}`,
                label: image.label,
            })),
            description: game.description,
            details: {
                developer: game.developers[0].name,
                releaseDate: game.release_date,
                platforms: game.platforms.map((platform) => platform.name),
                publisher: game.publisher?.name,
                rating: game.rating,
                genres: game.categories.map((category) => category.name),
            },
            upcomingGames: gamesMock,
            upcomingHighlight: highlightMock,
            recommendedGames: gamesMock,
        },
    };
};

export default Index;
