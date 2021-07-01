import Button from "../Button";
import { Wrapper, Title, Subtitle, Content, FloatImage } from "./styles";

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
};

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
}: HighlightProps) => (
  <Wrapper backgroundImage={backgroundImage}>
    {!!floatImage && <FloatImage src={floatImage} alt={title} />}
    <Content>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </Content>
  </Wrapper>
);

export default Highlight;
