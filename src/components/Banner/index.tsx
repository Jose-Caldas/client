import { Wrapper, Image, Caption, Subtitle, Title } from "./styles";
import Button from "../Button";
import Ribbon, { RibbonColors, RibbonSizes } from "../Ribbon";
import { ReactNode } from "react";

export type BannerProps = {
    img: string;
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonLink: string;
    ribbon?: ReactNode;
    ribbonSize?: RibbonSizes;
    ribbonColor?: RibbonColors;
};

const Banner = ({
    img,
    title,
    subtitle,
    buttonLabel,
    buttonLink,
    ribbonColor = "primary",
    ribbon,
    ribbonSize = "small",
}: BannerProps) => (
    <Wrapper>
        {!!ribbon && (
            <Ribbon color={ribbonColor} size={ribbonSize}>
                {ribbon}
            </Ribbon>
        )}
        <Image src={img} role="img" aria-label={title} />
        <Caption>
            <Title>{title}</Title>
            <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
            <Button as="a" href={buttonLink} size="large">
                {buttonLabel}
            </Button>
        </Caption>
    </Wrapper>
);

export default Banner;
