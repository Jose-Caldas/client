import Base from "../Base";
import { Container } from "../../components/Container";
import { BannerProps } from "../../components/Banner";
import { GameCardProps } from "../../components/GameCard";
import { HighlightProps } from "../../components/Highlight";
import BannerSlider from "../../components/BannerSlider";
import Showcase from "../../components/Showcase";

import { SectionBanner, SectionNews } from "./styles";

export type HomeTemplateProps = {
    banners: BannerProps[];
    newGames: GameCardProps[];
    mostPopularHighlight: HighlightProps;
    mostPopularGames: GameCardProps[];
    upcommingGames: GameCardProps[];
    upcommingHighlight: HighlightProps;
    freeGames: GameCardProps[];
    freeHighlight: HighlightProps;
};

const Home = ({
    banners,
    newGames,
    mostPopularHighlight,
    mostPopularGames,
    upcommingGames,
    upcommingHighlight,
    freeGames,
    freeHighlight,
}: HomeTemplateProps) => (
    <Base>
        <Container>
            <SectionBanner>
                <BannerSlider items={banners} />
            </SectionBanner>
        </Container>

        <SectionNews>
            <Showcase title="News" games={newGames} color="black" />
        </SectionNews>

        <Showcase
            title="Most Popular Games"
            highlight={mostPopularHighlight}
            games={mostPopularGames}
        />

        <Showcase
            title="Upcoming Games"
            games={upcommingGames}
            highlight={upcommingHighlight}
        />

        <Showcase
            title=" Free Games"
            highlight={freeHighlight}
            games={freeGames}
        />
    </Base>
);

export default Home;
