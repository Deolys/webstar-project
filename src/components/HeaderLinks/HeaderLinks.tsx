import React from 'react';

import starGreen from '../../assets/icons/star-green.svg';

export function HeaderLinks({ isOpen }) {
  return (
      <nav className={`header__links ${isOpen ? 'change' : ''}`}>
          <a className="header__link favourites-link ">
              <img className="favourite-green__icon" src={starGreen} title="Избранное" aria-label="Избранное" />
              <span className="favourites-link__title">Избранное</span>
          </a>

          <a className="header__link my-card-link">
              <button className="my-card-btn">Моя карточка</button>
          </a>

          <a className="header__link logout-link ">
              <button className="logout-btn">Выйти</button>
          </a>

          <a className="header__link login-link hidden">
              <button className="login-btn">Войти</button>
          </a>

          <a className="header__link sign-up-link hidden">
              <button className="sign-up-btn">Зарегистрироваться</button>
          </a>
      </nav>
  );
}