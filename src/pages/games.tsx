import GamesTemplate, { GamesTemplateProps } from "../templates/Games";

function GamesPage(props: GamesTemplateProps) {
    return <GamesTemplate {...props} />;
}

export async function getServerSideProps() {
    return {
        props: {
            games: [],
        },
    };
}

export default GamesPage;
