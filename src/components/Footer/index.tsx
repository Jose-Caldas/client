import Logo from "../Logo";
import Link from "next/link";
import { Wrapper, Content, Column, Copyright } from "./styles";
import Heading from "../Heading";

const Footer = () => (
  <Wrapper>
    <Logo color="black" />
    <Content>
      <Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Contact us
        </Heading>
        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        <a href="mailto:sac@wongames.com">(11)9999-9999</a>
      </Column>

      <Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagran
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </Column>

      <Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Search</a>
          </Link>
          <Link href="/search">
            <a>FAQ</a>
          </Link>
        </nav>
      </Column>

      <Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Rua Logo Ali</span>
        <span>1200</span>
        <span>São Paulo/SP</span>
      </Column>
    </Content>
    <Copyright>Won Games 2021 © All rights reserved.</Copyright>
  </Wrapper>
);

export default Footer;
