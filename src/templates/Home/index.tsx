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
    newGamesTitle: string;
    newGames: GameCardProps[];
    mostPopularGamesTitle: string;
    mostPopularHighlight: HighlightProps;
    mostPopularGames: GameCardProps[];
    upcomingGamesTitle: string;
    upcommingGames: GameCardProps[];
    upcommingHighlight: HighlightProps;
    freeGamesTitle: string;
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
    newGamesTitle,
    mostPopularGamesTitle,
    upcomingGamesTitle,
    freeGamesTitle,
}: HomeTemplateProps) => {
    return (
        <Base>
            <Container>
                <SectionBanner>
                    <BannerSlider items={banners} />
                </SectionBanner>
            </Container>

            <SectionNews>
                <Showcase
                    title={newGamesTitle}
                    games={newGames}
                    color="black"
                />
            </SectionNews>

            <Showcase
                title={mostPopularGamesTitle}
                highlight={mostPopularHighlight}
                games={mostPopularGames}
            />

            <Showcase
                title={upcomingGamesTitle}
                games={upcommingGames}
                highlight={upcommingHighlight}
            />

            <Showcase
                title={freeGamesTitle}
                highlight={freeHighlight}
                games={freeGames}
            />
        </Base>
    );
};

export default Home;
