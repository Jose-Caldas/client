// import { Wrapper } from "./styles";
import { Container } from "../../components/Container";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";

import { BannerProps } from "../../components/Banner";
import { GameCardProps } from "../../components/GameCard";
import Highlight, { HighlightProps } from "../../components/Highlight";

import BannerSlider from "../../components/BannerSlider";
import GameCardSlider from "../../components/GameCardSlider";

import {
  SectionBanner,
  SectionNews,
  SectionMostPopular,
  SectionUpcoming,
  SectionFreeGames,
  SectionFooter,
} from "./styles";

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
  <section>
    <Container>
      <Menu />
      <SectionBanner>
        <BannerSlider items={banners} />
      </SectionBanner>
    </Container>

    <SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>
    </SectionNews>
    <Container>
      <SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </SectionMostPopular>
    </Container>
    <Container>
      <SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Up Comming
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighlight} />
        <GameCardSlider items={upcommingMoreGames} />
      </SectionUpcoming>
    </Container>
    <Container>
      <SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </SectionFreeGames>
    </Container>

    <SectionFooter>
      <Container>
        <Footer />
      </Container>
    </SectionFooter>
  </section>
);

export default Home;
