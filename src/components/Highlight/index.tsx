import Button from "../Button";
import { Wrapper, Title, Subtitle } from "./styles";

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}: HighlightProps) => (
  <Wrapper aria-label={buttonLabel}>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <Button as="a" href={buttonLink}>
      {buttonLabel}
    </Button>
  </Wrapper>
);

export default Highlight;
