import Home, { HomeTemplateProps } from "../templates/Home";
import { initializeApollo } from "../utils/apollo";
import { QueryHome } from "../graphql/generated/QueryHome";
import { QUERY_HOME } from "../graphql/queries/home";

export default function Index(props: HomeTemplateProps) {
    return <Home {...props} />;
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    const {
        data: { banners, newGames, upcomingGames, freeGames, sections },
    } = await apolloClient.query<QueryHome>({ query: QUERY_HOME });

    return {
        props: {
            revalidate: 10, // a cada 10 segundos renova a página/ faz nova chamada ao servidor
            banners: banners.map((banner) => ({
                img: `http://localhost:1337${banner.image?.url}`,
                title: banner.title,
                subtitle: banner.subtitle,
                buttonLabel: banner.button?.label,
                buttonLink: banner.button?.link,
                ...(banner.ribbon && {
                    ribbon: banner.ribbon.text,
                    ribbonColor: banner.ribbon?.color,
                    ribbonSize: banner.ribbon?.size,
                }),
            })),
            newGamesTitle: sections?.newGames?.title,
            newGames: newGames.map((game) => ({
                title: game.name,
                slug: game.slug,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover?.url}`,
                price: game.price,
            })),

            mostPopularHighlight: {
                title: sections?.popularGames?.highlight?.title,
                subtitle: sections?.popularGames?.highlight?.subtitle,
                backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url}`,
                floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatimage?.url}`,
                buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
                buttonLink: sections?.popularGames?.highlight?.buttonLink,
                alignment: sections?.popularGames?.highlight?.alignment,
            },
            mostPopularGamesTitle: sections?.popularGames?.title,
            mostPopularGames: sections!.popularGames!.games.map((game) => ({
                title: game.name,
                slug: game.slug,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover?.url}`,
                price: game.price,
            })),
            upcomingGamesTitle: sections?.upcomingGames?.title,
            upcommingGames: upcomingGames.map((game) => ({
                title: game.name,
                slug: game.slug,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover?.url}`,
                price: game.price,
            })),
            upcommingHighlight: {
                title: sections?.upcomingGames?.highlight?.title,
                subtitle: sections?.upcomingGames?.highlight?.subtitle,
                backgroundImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.background?.url}`,
                floatImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.floatimage?.url}`,
                buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
                buttonLink: sections?.upcomingGames?.highlight?.buttonLink,
                alignment: sections?.upcomingGames?.highlight?.alignment,
            },
            freeGamesTitle: sections?.freeGames?.title,
            freeGames: freeGames.map((game) => ({
                title: game.name,
                slug: game.slug,
                developer: game.developers[0].name,
                img: `http://localhost:1337${game.cover?.url}`,
                price: game.price,
            })),
            freeHighlight: {
                title: sections?.freeGames?.highlight?.title,
                subtitle: sections?.freeGames?.highlight?.subtitle,
                backgroundImage: `http://localhost:1337${sections?.freeGames?.highlight?.background?.url}`,
                floatImage: `http://localhost:1337${sections?.freeGames?.highlight?.floatimage?.url}`,
                buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
                buttonLink: sections?.freeGames?.highlight?.buttonLink,
                alignment: sections?.freeGames?.highlight?.alignment,
            },
        },
    };
}

// title: "Red Dead it's back!",
// subtitle: "Come see John's new adventures",
// buttonLabel: "Buy now",
// buttonLink: "game/rdr2",
// backgroundImage: "/img/red-dead-img.jpg",
