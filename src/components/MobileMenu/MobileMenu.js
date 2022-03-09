/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
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
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
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

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0%);
  }
`;

const Side = styled.div`
  flex-grow: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  animation: ${fadeIn} calc(var(--animation-time) * 2) both;
  animation-delay: var(--text-animation-delay);
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  height: 100%;
  animation: ${fadeIn} var(--animation-time) both;
  animation-delay: var(--text-animation-delay);
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
  --animation-time: 250ms;
  --text-animation-delay: calc(var(--animation-time) * 1.5);

  animation: ${fadeIn} var(--animation-time);
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  background-color: ${COLORS.white};
  padding: 32px;
  min-width: min(300px, 100%);

  animation: ${slideIn} var(--animation-time) both ease-out;
  animation-delay: var(--animation-time);
`;
