import React, { useState } from "react";

import { Burger } from "./burger";
import { HeaderLinks } from "../header-links";

import logo from '../../assets/icons/logo.svg';

import { HeaderBlock, HeaderWrapper, LogoLink } from "./styled";

import { URLs } from "../../__data__/urls";

export function Header({showFavourites, setShowFavourites}) {
  const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);

  const handleHeaderLinksToggle = () => {
    setIsHeaderLinksOpen(!isHeaderLinksOpen);
  };

  return (
    <HeaderBlock>
      <HeaderWrapper>
        <LogoLink href={URLs.baseUrl}>
          <img className="logo__icon" src={logo} srcSet={logo} alt="WebStar" />
        </LogoLink>
        <HeaderLinks isOpen={isHeaderLinksOpen} setShowFavourites={setShowFavourites} showFavourites={showFavourites} />
        <Burger onHeaderLinksToggle={handleHeaderLinksToggle} />
      </HeaderWrapper>
    </HeaderBlock>
  );
}
