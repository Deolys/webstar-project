import React, { useState } from "react";
import { Burger } from "./burger";
import { HeaderLinks } from "../header-links";

import logo from '../../assets/icons/logo.svg';

export function Header() {
  const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);

  const handleHeaderLinksToggle = () => {
    setIsHeaderLinksOpen(!isHeaderLinksOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo logo" href="#">
          <img className="logo__icon" src={logo} srcSet={logo} alt="WebStar" />
        </a>
        <HeaderLinks isOpen={isHeaderLinksOpen} />
        <Burger onHeaderLinksToggle={handleHeaderLinksToggle} />
      </div>
    </header>
  );
}
