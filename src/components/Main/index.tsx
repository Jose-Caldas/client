import { Wrapper, Title, Logo, Description, Illustration } from "./styles";
import {} from "@storybook/react";

export default function Main({
  title = "React avançado",
  description = "TypeScript, ReactJS, NextJS e Styled-Components",
}) {
  return (
    <Wrapper>
      <main>
        <Logo
          src="/logo.svg"
          alt="logo-Atomo e ao lado escrito react avançado"
        />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Illustration
          src="/hero-illustration.svg"
          alt="figura de um desenvolvedor e uma tela com códigos"
        />
      </main>
    </Wrapper>
  );
}
