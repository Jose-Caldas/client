import GamesTemplate, { GamesTemplateProps } from "../templates/Games";
import filterMock from "../components/ExploreSidebar/mock";
import gamesMock from "../components/GameCardSlider/mock";

function GamesPage(props: GamesTemplateProps) {
    return <GamesTemplate {...props} />;
}

export async function getServerSideProps() {
    return {
        props: {
            games: gamesMock,
            filterItems: filterMock,
        },
    };
}

export default GamesPage;
