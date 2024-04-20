import React, { useState } from "react";
import { Burger } from "./Burger";
import { HeaderLinks } from "../HeaderLinks";

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
          <img className="logo__icon" src={logo} alt="WebStar" />
        </a>
        <HeaderLinks isOpen={isHeaderLinksOpen} />
        <Burger onHeaderLinksToggle={handleHeaderLinksToggle} />
      </div>
    </header>
  );
}
