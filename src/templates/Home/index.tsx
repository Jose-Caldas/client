import Base from "../Base";
import { Container } from "../../components/Container";
import { BannerProps } from "../../components/Banner";
import { GameCardProps } from "../../components/GameCard";
import { HighlightProps } from "../../components/Highlight";
import BannerSlider from "../../components/BannerSlider";
import Showcase from "../../components/Showcase";

import { SectionBanner, SectionNews, SectionUpcoming } from "./styles";

export type HomeTemplateProps = {
    banners: BannerProps[];
    newGames: GameCardProps[];
    mostPopularHighlight: HighlightProps;
    mostPopularGames: GameCardProps[];
    upcommingGames: GameCardProps[];
    upcommingHighlight: HighlightProps;
    upcommingMoreGames: GameCardProps[];
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
    upcommingMoreGames,
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
            <Showcase title="News" games={newGames} />
        </SectionNews>

        <Showcase
            title="Most Popular Games"
            highlight={mostPopularHighlight}
            games={mostPopularGames}
        />

        <SectionUpcoming>
            <Showcase title="Upcoming Games" games={upcommingGames} />
            <Showcase
                highlight={upcommingHighlight}
                games={upcommingMoreGames}
            />
        </SectionUpcoming>

        <Showcase
            title=" Free Games"
            highlight={freeHighlight}
            games={freeGames}
        />
    </Base>
);

export default Home;
