import { ReactNode } from "react";
import * as S from "./styles";
import Logo from "../../components/Logo";
import Heading from "../../components/Heading";
// import Image from "next/image";

export type AuthProps = {
  title: string;
  children: ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />
      <Heading>All your favorite games in one place</Heading>
      <S.Subtitle>
        <strong>WON</strong> is the best and most complete gaming platform.
      </S.Subtitle>
      <S.Footer>Won Games 2021 © Todos os Direitos Reservados</S.Footer>
    </S.BannerBlock>

    <S.BannerContent>
      <Logo color="black" size="large" />
      <Heading lineLeft lineColor="secondary" color="black">
        {title}
      </Heading>
      {children}
    </S.BannerContent>
  </S.Wrapper>
);

export default Auth;
