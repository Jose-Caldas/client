import { GameCardProps } from "../GameCard";
import GameCardSlider from "../GameCardSlider";
import Heading from "../Heading";
import Highlight, { HighlightProps } from "../Highlight";
import { Wrapper } from "./styles";

export type ShowcaseProps = {
    title?: string;
    highlight?: HighlightProps;
    games?: GameCardProps[];
    color?: "black" | "white";
};

const Showcase = ({
    games,
    highlight,
    title,
    color = "white",
}: ShowcaseProps) => (
    <Wrapper>
        {!!title && (
            <Heading lineLeft lineColor="secondary">
                {title}
            </Heading>
        )}
        {!!highlight && <Highlight {...highlight} />}
        {!!games && <GameCardSlider items={games} color={color} />}
    </Wrapper>
);

export default Showcase;
