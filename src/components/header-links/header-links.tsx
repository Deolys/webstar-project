import React, { useContext, useEffect, useState } from 'react';

import starGreen from '../../assets/icons/star-green.svg';

import { BorderLink, FavouritesLink, FavouritesTitle, GradientLink, LinksNav } from './styled';

import { URLs } from "../../__data__/urls";
import { AuthContext } from '../../contexts/auth-context';

const nav = {
  card: { title: "My card", href: URLs.ui.cardDetailEdit.getUrl("_user-card-id") },
  login: { title: "Login", href: URLs.ui.login },
  register: { title: "Login", href: URLs.ui.register },
};

export function HeaderLinks({ isOpen, showFavourites, setShowFavourites }) {
  const onMainPage = location.pathname === "/webstar-project";
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [ myCardUrl, setMyCardUrl ] = useState(nav.card.href);
  const isAuth = !!currentUser;

  const onLogOut = () => {
    setCurrentUser(null);
  }

  useEffect(() => {
    if(currentUser && currentUser.cardId) {
      setMyCardUrl(URLs.ui.cardDetailEdit.getUrl(currentUser.cardId));
    }
  }, [currentUser]);
  
  const handleShowFavourites = (e) => {
    e.preventDefault();
    setShowFavourites((prevShow) => !prevShow);
  }

  return (
    <LinksNav isOpen={isOpen}>
    {onMainPage && <FavouritesLink isVisible={true} onClick={handleShowFavourites} isActive={showFavourites}>
      <img className="favourite-green__icon" src={starGreen} title="Избранное" aria-label="Избранное" />
      <FavouritesTitle>Избранное</FavouritesTitle>
    </FavouritesLink>}

    <GradientLink isVisible={isAuth} href={myCardUrl}>
      <button className="my-card-btn">Моя карточка</button>
    </GradientLink>

    <BorderLink isVisible={isAuth}>
      <button className="logout-btn" onClick={onLogOut}>Выйти</button>
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