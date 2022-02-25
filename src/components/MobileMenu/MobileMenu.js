/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import IconWrapper from "../IconWrapper";
import { ReactComponent as CloseIcon } from "../../assets/CloseIcon.svg";
import { NavLink } from "../Header/Header";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Content>
        <CloseButton onClick={onDismiss}>
          <IconWrapper>
            <CloseIcon />
          </IconWrapper>
          <VisuallyHidden> Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Side />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Side>
      </Content>
    </Wrapper>
  );
};

export default MobileMenu;

const Side = styled.div`
  flex-grow: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  height: 100%;
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
  text-decoration: none;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 26px;
  right: 16px;
  padding: 0;
  border: none;
  background-color: transparent;

  @media ${({ theme }) => theme.QUERIES.tabletAndSmaller} {
    right: 32px;
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: end;
  background: rgba(96, 100, 108, 0.8);
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  background-color: ${COLORS.white};
  padding: 32px;
  min-width: min(300px, 100%);
`;
