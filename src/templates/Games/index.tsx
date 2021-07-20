import { Container } from "../../components/Container";
import { GameCardProps } from "../../components/GameCard";
import Heading from "../../components/Heading";
import Base from "../Base";

export type GamesTemplateProps = {
    games?: GameCardProps[];
};

const GamesTemplate = ({ games = [] }: GamesTemplateProps) => (
    <Base>
        <Container>
            <Heading>Games</Heading>
        </Container>
    </Base>
);

export default GamesTemplate;
