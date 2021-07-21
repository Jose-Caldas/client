import { useState } from "react";
import Link from "next/link";

import { Menu2 as MenuIcon } from "@styled-icons/remix-fill/Menu2";
import { Search as SearchIcon } from "@styled-icons/material-outlined/Search";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";
import Button from "../Button/";
import CartIcon from "../CartIcon";

import Logo from "../Logo";

import {
    Wrapper,
    IconWrapper,
    LogoWrapper,
    MenuGroup,
    MenuFull,
    MenuNav,
    MenuLink,
    RegisterBox,
    CreateAccount,
} from "./styles";
import MediaMatch from "../MediaMatch";
import CartDropdown from "../CartDropdown";
import UserDropdown from "../UserDropdown";

export type MenuProps = {
    username?: string;
};

const Menu = ({ username }: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Wrapper isOpen={isOpen}>
            <MediaMatch lessThan="medium">
                <IconWrapper onClick={() => setIsOpen(true)}>
                    <MenuIcon aria-label="Open Menu" />
                </IconWrapper>
            </MediaMatch>

            <LogoWrapper>
                <Link href="/" passHref>
                    <a>
                        <Logo hideOnMobile />
                    </a>
                </Link>
            </LogoWrapper>

            <MediaMatch greaterThan="medium">
                <MenuNav>
                    <Link href="/" passHref>
                        <MenuLink>Home</MenuLink>
                    </Link>
                    <Link href="/games" passHref>
                        <MenuLink>Explore</MenuLink>
                    </Link>
                </MenuNav>
            </MediaMatch>

            <MenuGroup>
                <IconWrapper>
                    <SearchIcon aria-label="Search" />
                </IconWrapper>

                <IconWrapper>
                    <MediaMatch greaterThan="medium">
                        <CartDropdown />
                    </MediaMatch>
                    <MediaMatch lessThan="medium">
                        <Link href="/cart">
                            <a>
                                <CartIcon />
                            </a>
                        </Link>
                    </MediaMatch>
                </IconWrapper>
                <MediaMatch greaterThan="medium">
                    {!username ? (
                        <Link href="/sign-in" passHref>
                            <Button as="a">Sign in</Button>
                        </Link>
                    ) : (
                        <UserDropdown username={username} />
                    )}
                </MediaMatch>
            </MenuGroup>
            <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
                <CloseIcon
                    aria-label="Close Menu"
                    onClick={() => setIsOpen(false)}
                />
                <MenuNav>
                    <Link href="/" passHref>
                        <MenuLink>Home</MenuLink>
                    </Link>
                    <Link href="/games" passHref>
                        <MenuLink>Explore</MenuLink>
                    </Link>

                    {!!username && (
                        <>
                            <Link href="/profile/me" passHref>
                                <MenuLink>My profile</MenuLink>
                            </Link>
                            <Link href="/wishlist" passHref>
                                <MenuLink>Wishlist</MenuLink>
                            </Link>
                        </>
                    )}
                </MenuNav>
                {!username && (
                    <RegisterBox>
                        <Link href="/sign-in" passHref>
                            <Button as="a" fullWidth size="large">
                                Sign in
                            </Button>
                        </Link>
                        <span>Or</span>
                        <Link href="/sign-up" passHref>
                            <CreateAccount title="Sign Up">
                                Sign Up
                            </CreateAccount>
                        </Link>
                    </RegisterBox>
                )}
            </MenuFull>
        </Wrapper>
    );
};

export default Menu;
