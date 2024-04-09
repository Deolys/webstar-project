import React, { useState, useEffect } from "react";

import '../styles/normalize.css';
import "../styles/style.css";
import "../styles/admin.css";

import logo from '../assets/icons/logo.svg';
import search from '../assets/icons/search.svg';
import starGreen from '../assets/icons/star-green.svg';

const Burger = ({ onHeaderLinksToggle }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
    onHeaderLinksToggle();
  };  

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isBurgerOpen && !e.target.closest('.burger') && !e.target.closest('.header__links')) {
        setIsBurgerOpen(false);
        onHeaderLinksToggle();
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isBurgerOpen]);

  return (
    <>
      <div id="burger" className={`burger ${isBurgerOpen ? 'change' : ''}`} onClick={handleBurgerClick}>
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
      </div>
      <div className={`burger-bg__content ${isBurgerOpen ? 'change' : ''}`}>
        <div id="burger-bg" className={`burger-bg ${isBurgerOpen ? 'change-bg' : ''}`}></div>
      </div>
    </>
  );
};

const Admin = () => {
  const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);
  const handleHeaderLinksToggle = () => {
    setIsHeaderLinksOpen(!isHeaderLinksOpen);
  };

  return(
    <>
       <div className="wrapper">
       <header className="header">
      <div className="header__container">
        <a className="header__logo logo">
          <img className="logo__icon" src={logo}/>
        </a>
        <nav className={`header__links ${isHeaderLinksOpen ? 'change' : ''}`}>
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
        </nav>
      <Burger onHeaderLinksToggle={handleHeaderLinksToggle}/>

      </div>
    </header>

    <main className="page">
      <div className="page__container">
        <section className="panel">
          <div className="panel__top">
            <h2 className="panel__title">With great power comes great responsibility</h2>
            <div className="panel__search search">
              <button className="search__btn" type="submit">
                <span>поиск</span>
                <img className="search__icon" src={search}/>
              </button>
              <input className="search__input" type="text" placeholder="Найти исполнителя..." aria-label="Найти исполнителя"/>
            </div>
          </div>
          <div className="panel__messages">
            <div className="message">
              <span className="message__number">#123456</span>
              <div className="message__title">Самое лучшее название, которое только можно придумать!</div>
              <div className="message__buttons">
                <button className="message__button view-btn">Смотреть</button>
                <button className="message__button accept-btn">Принять</button>
                <button className="message__button reject-btn">Отклонить</button>
              </div>
            </div>

            <div className="message">
              <span className="message__number">#123456</span>
              <div className="message__title">Самое лучшее название, которое только можно придумать!</div>
              <div className="message__buttons">
                <button className="message__button view-btn">Смотреть</button>
                <button className="message__button accept-btn">Принять</button>
                <button className="message__button reject-btn">Отклонить</button>
              </div>
            </div>

            <div className="message">
              <span className="message__number">#123456</span>
              <div className="message__title">Самое лучшее название, которое только можно придумать!</div>
              <div className="message__buttons">
                <button className="message__button view-btn">Смотреть</button>
                <button className="message__button accept-btn">Принять</button>
                <button className="message__button reject-btn">Отклонить</button>
              </div>
            </div>

            <div className="message">
              <span className="message__number">#123456</span>
              <div className="message__title">Самое лучшее название, которое только можно придумать!</div>
              <div className="message__buttons">
                <button className="message__button view-btn">Смотреть</button>
                <button className="message__button accept-btn">Принять</button>
                <button className="message__button reject-btn">Отклонить</button>
              </div>
            </div>

            <div className="message">
              <span className="message__number">#123456</span>
              <div className="message__title">Самое лучшее название, которое только можно придумать!</div>
              <div className="message__buttons">
                <button className="message__button view-btn">Смотреть</button>
                <button className="message__button accept-btn">Принять</button>
                <button className="message__button reject-btn">Отклонить</button>
              </div>
            </div>

            <div className="message">
              <span className="message__number">#123456</span>
              <div className="message__title">Самое лучшее название, которое только можно придумать!</div>
              <div className="message__buttons">
                <button className="message__button view-btn">Смотреть</button>
                <button className="message__button accept-btn">Принять</button>
                <button className="message__button reject-btn">Отклонить</button>
              </div>
            </div>

            <div className="message">
              <span className="message__number">#123456</span>
              <div className="message__title">Самое лучшее название, которое только можно придумать!</div>
              <div className="message__buttons">
                <button className="message__button view-btn">Смотреть</button>
                <button className="message__button accept-btn">Принять</button>
                <button className="message__button reject-btn">Отклонить</button>
              </div>
            </div>

            <div className="message">
              <span className="message__number">#123456</span>
              <div className="message__title">Самое лучшее название, которое только можно придумать!</div>
              <div className="message__buttons">
                <button className="message__button view-btn">Смотреть</button>
                <button className="message__button accept-btn">Принять</button>
                <button className="message__button reject-btn">Отклонить</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

  </div>
    </>
  )
};

export default Admin;
