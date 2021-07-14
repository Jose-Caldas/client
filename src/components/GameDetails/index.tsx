import Heading from "../Heading";
import MediaMatch from "../MediaMatch";
import * as S from "./styles";
import { Apple, Windows, Linux } from "@styled-icons/fa-brands";

type Platform = "windows" | "linux" | "mac";

type Rating = "BR0" | "BR10" | "BR12" | "BR14 " | "BR16" | "BR18";

export type GameDetailsProps = {
    developer: string;
    platforms: Platform[];
    releaseDate: string;
    rating: Rating;
    genres: string[];
};

const GameDetails = ({
    platforms,
    developer,
    releaseDate,
    rating,
    genres,
}: GameDetailsProps) => {
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
                    <S.Description>{developer}</S.Description>
                </S.Block>
                <S.Block>
                    <S.Label>Release Date</S.Label>
                    <S.Description>
                        {new Intl.DateTimeFormat("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        }).format(new Date(releaseDate))}
                    </S.Description>
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
                    <S.Description>
                        {rating === "BR0"
                            ? "FREE"
                            : `${rating.replace("BR", "")}+`}
                    </S.Description>
                </S.Block>
                <S.Block>
                    <S.Label>Genres</S.Label>
                    <S.Description>{genres.join(" / ")}</S.Description>
                </S.Block>
            </S.ContentBlock>
        </S.Wrapper>
    );
};

export default GameDetails;
