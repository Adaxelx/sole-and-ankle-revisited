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
  display: flex;
  gap: 24px;
  margin-left: auto;

  @media ${({ theme }) => theme.QUERIES.laptopAndUp} {
    display: none;
  }
`;

const TransparentButton = styled(UnstyledButton)`
  ${MobileButtonsWrapper} &:first-child {
    margin-left: 24px;
  }

  @media ${({ theme }) => theme.QUERIES.laptopAndUp} {
    display: none;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 16px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${({ theme }) => theme.QUERIES.laptopAndSmaller} {
    align-items: baseline;
  }

  @media ${({ theme }) => theme.QUERIES.tabletAndSmaller} {
    padding: 18px 32px;
    border-top: 4px solid ${COLORS.gray[900]};
  }
`;

const Nav = styled.nav`
  display: none;

  @media ${({ theme }) => theme.QUERIES.laptopAndUp} {
    display: flex;
    gap: 48px;
    margin: 0px 48px;
  }
`;

const Side = styled.div`
  @media ${({ theme }) => theme.QUERIES.laptopAndUp} {
    flex: 1;
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
