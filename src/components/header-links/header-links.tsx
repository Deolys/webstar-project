import React from 'react';

import starGreen from '../../assets/icons/star-green.svg';

import { BorderLink, FavouritesLink, FavouritesTitle, GradientLink, LinksNav } from './styled';

import { URLs } from "../../__data__/urls";

let isAuth = true;

const nav = {
  card: { title: "My card", href: URLs.ui.cardDetailEdit.getUrl("_user-card-id") },
  favourites: { title: "Favourites", href: URLs.ui.favourites },
  login: { title: "Login", href: URLs.ui.login },
  register: { title: "Login", href: URLs.ui.register },
};

export function HeaderLinks({ isOpen }) {
  return (
    <LinksNav isOpen={isOpen}>
    <FavouritesLink isVisible={isAuth} href={nav.favourites.href}>
      <img className="favourite-green__icon" src={starGreen} title="Избранное" aria-label="Избранное" />
      <FavouritesTitle>Избранное</FavouritesTitle>
    </FavouritesLink>

    <GradientLink isVisible={isAuth} href={nav.card.href}>
      <button className="my-card-btn">Моя карточка</button>
    </GradientLink>

    <BorderLink isVisible={isAuth}>
      <button className="logout-btn">Выйти</button>
    </BorderLink>

    <GradientLink isVisible={!isAuth} href={nav.register.href}>
      <button className="sign-up-btn">Зарегистрироваться</button>
    </GradientLink>

    <BorderLink isVisible={!isAuth} href={nav.login.href}>
      <button className="login-btn">Войти</button>
    </BorderLink>
  </LinksNav>
  );
}