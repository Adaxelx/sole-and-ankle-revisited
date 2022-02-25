import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as HamburgerIcon } from "../../assets/Hamburger.svg";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import { ReactComponent as ShoppingIcon } from "../../assets/ShoppingBagIcon.svg";
import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import IconWrapper from "../IconWrapper";
import VisuallyHidden from "../VisuallyHidden";
import UnstyledButton from "../UnstyledButton";
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <MobileButtonsWrapper>
          <TransparentButton>
            <IconWrapper>
              <ShoppingIcon />
              <VisuallyHidden>Open cart</VisuallyHidden>
            </IconWrapper>
          </TransparentButton>
          <TransparentButton>
            <IconWrapper>
              <SearchIcon />
              <VisuallyHidden>Search</VisuallyHidden>
            </IconWrapper>
          </TransparentButton>
          <TransparentButton onClick={() => setShowMobileMenu(true)}>
            <IconWrapper>
              <HamburgerIcon />
            </IconWrapper>
          </TransparentButton>
        </MobileButtonsWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MobileButtonsWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 24px;
    margin-left: auto;
  }
`;

const TransparentButton = styled(UnstyledButton)`
  ${MobileButtonsWrapper} &:first-child {
    margin-left: 24px;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${({ theme }) => theme.QUERIES.tabletAndSmaller} {
    align-items: center;
    border-top: 4px solid ${COLORS.gray[900]};
  }

  @media ${({ theme }) => theme.QUERIES.phoneAndSmaller} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${({ theme }) => theme.QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
  @media ${({ theme }) => theme.QUERIES.tabletAndSmaller} {
    flex: 0;
  }
`;

export const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
