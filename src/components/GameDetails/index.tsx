import Heading from "../Heading";
import MediaMatch from "../MediaMatch";
import * as S from "./styles";
import { Apple, Windows, Linux } from "@styled-icons/fa-brands";

type Platform = "windows" | "linux" | "mac";

export type GameDetailsProps = {
    platforms: Platform[];
    // developers?: string;
};

const GameDetails = ({ platforms }: GameDetailsProps) => {
    const platformIcons = {
        linux: <Linux title="Linux" size="18" />,
        mac: <Apple title="Mac" size="18" />,
        windows: <Windows title="Windows" size="18" />,
    };
    return (
        <S.Wrapper>
            <MediaMatch greaterThan="small">
                <Heading lineLeft lineColor="secondary" color="white">
                    Game details
                </Heading>
            </MediaMatch>
            <S.ContentBlock>
                <S.Block>
                    <S.Label>Developer</S.Label>
                    <S.Description>Gear Software</S.Description>
                </S.Block>
                <S.Block>
                    <S.Label>Releasse Date</S.Label>
                    <S.Description>November 16, 2019 </S.Description>
                </S.Block>
                <S.Block>
                    <S.Label>Platforms</S.Label>
                    <S.IconWrapper>
                        {platforms.map((icon: Platform) => (
                            <S.Icon key={icon}> {platformIcons[icon]}</S.Icon>
                        ))}
                    </S.IconWrapper>
                </S.Block>
                <S.Block>
                    <S.Label>Publisher</S.Label>
                    <S.Description>2K</S.Description>
                </S.Block>
                <S.Block>
                    <S.Label>Rating</S.Label>
                    <S.Description>18+</S.Description>
                </S.Block>
                <S.Block>
                    <S.Label>Genre</S.Label>
                    <S.Description>Action / Adventure</S.Description>
                </S.Block>
            </S.ContentBlock>
        </S.Wrapper>
    );
};

export default GameDetails;
