import React from 'react';

import starGreen from '../../assets/icons/star-green.svg';

import { BorderLink, FavouritesLink, FavouritesTitle, GradientLink, LinksNav } from './styled';

let isAuth = true;

export function HeaderLinks({ isOpen }) {
  return (
    <LinksNav className="header-links" isOpen={isOpen}>
    <FavouritesLink isVisible={isAuth}>
      <img className="favourite-green__icon" src={starGreen} title="Избранное" aria-label="Избранное" />
      <FavouritesTitle>Избранное</FavouritesTitle>
    </FavouritesLink>

    <GradientLink isVisible={isAuth}>
      <button className="my-card-btn">Моя карточка</button>
    </GradientLink>

    <BorderLink isVisible={isAuth}>
      <button className="logout-btn">Выйти</button>
    </BorderLink>

    <GradientLink isVisible={!isAuth}>
      <button className="sign-up-btn">Зарегистрироваться</button>
    </GradientLink>

    <BorderLink isVisible={!isAuth}>
      <button className="login-btn">Войти</button>
    </BorderLink>
  </LinksNav>
  );
}