import React, { useState } from "react";

import { Burger } from "./burger";
import { HeaderLinks } from "../header-links";

import logo from '../../assets/icons/logo.svg';

import { HeaderBlock, HeaderWrapper, LogoLink } from "./styled";

export function Header() {
  const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);

  const handleHeaderLinksToggle = () => {
    setIsHeaderLinksOpen(!isHeaderLinksOpen);
  };

  return (
    <HeaderBlock>
      <HeaderWrapper>
        <LogoLink href="/">
          <img className="logo__icon" src={logo} srcSet={logo} alt="WebStar" />
        </LogoLink>
        <HeaderLinks isOpen={isHeaderLinksOpen} />
        <Burger onHeaderLinksToggle={handleHeaderLinksToggle} />
      </HeaderWrapper>
    </HeaderBlock>
  );
}