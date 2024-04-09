import React, { useState, useEffect } from 'react';

import '../styles/normalize.css';
import '../styles/style.css';
import '../styles/main.css';

import site1 from '../assets/images/site1.jpeg';
import site2 from '../assets/images/site2.png';
import site3 from '../assets/images/site3.jpg';
import arrow from '../assets/icons/arrow.svg';
import logo from '../assets/icons/logo.svg';
import search from '../assets/icons/search.svg';
import starFilled from '../assets/icons/star-filled.svg';
import starGreen from '../assets/icons/star-green.svg';
import starOutline from '../assets/icons/star-outline.svg';
import firstDisplay from '../assets/icons/first-display.svg'
import secondDisplay from '../assets/icons/second-display.svg'

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

const Sidebar = () => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

 const handleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
       <aside className={`page__sidebar sidebar ${isSidebarOpen ? '_open' : ''}`}>
        <button className={`sidebar__btn ${isSidebarOpen ? '_open' : ''}`} onClick={handleSidebarClick}>
          <img src={arrow} title="Боковая панель" alt="Боковая панель" />
        </button>
        <div className="sidebar__categories categories">
          <span className="categories__title">Категории</span>
          <div className="categories__items">
            <div className="categories__item">Сайты</div>
            <div className="categories__item">Десктоп</div>
            <div className="categories__item">Дизайн</div>
            <div className="categories__item">Под ключ</div>
            <div className="categories__item">Мобильные устройства</div>
            <div className="categories__item">Вёрстка</div>
          </div>
        </div>

        <div className="sidebar__displays displays">
          <span className="displays__title">Отображение</span>
          <div className="displays__buttons">
            <button className="double-column-btn" title="Разместить карточки в две колонки">
              <img className="first-display__icon" src={firstDisplay} />
            </button>
            <button className="single-column-btn" title="Разместить карточки в одну колонку">
              <img className="second-display__icon" src={secondDisplay} />
            </button>
          </div>
        </div>

      </aside>
    </>
  );
};


const Main = () => {
  const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);
  const handleHeaderLinksToggle = () => {
    setIsHeaderLinksOpen(!isHeaderLinksOpen);
  };

  return (
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

          <a className="header__link login-link hidden">
            <button className="login-btn">Войти</button>
          </a>

          <a className="header__link sign-up-link hidden">
            <button className="sign-up-btn">Зарегистрироваться</button>
          </a>



        </nav>
      <Burger onHeaderLinksToggle={handleHeaderLinksToggle}/>

      </div>
    </header>

    <div className="content__container">
      <Sidebar/>
      {/* <aside className="page__sidebar sidebar">
        <button className="sidebar__btn">
          <img src={arrow} title="Боковая панель" alt="Боковая панель" />
        </button>
        <div className="sidebar__categories categories">
          <span className="categories__title">Категории</span>
          <div className="categories__items">
            <div className="categories__item">Сайты</div>
            <div className="categories__item">Десктоп</div>
            <div className="categories__item">Дизайн</div>
            <div className="categories__item">Под ключ</div>
            <div className="categories__item">Мобильные устройства</div>
            <div className="categories__item">Вёрстка</div>
          </div>
        </div>

        <div className="sidebar__displays displays">
          <span className="displays__title">Отображение</span>
          <div className="displays__buttons">
            <button className="double-column-btn" title="Разместить карточки в две колонки">
              <img className="first-display__icon" src={firstDisplay} />
            </button>
            <button className="single-column-btn" title="Разместить карточки в одну колонку">
              <img className="second-display__icon" src={secondDisplay} />
            </button>
          </div>
        </div>

      </aside> */}
      <main className="page">
        <div className="page__container">
          <section className="main">
              <h1 className="main__title">WebStar - create your digital dream with us</h1>
              <div className="main__search search">
                <button className="search__btn" type="submit">
                  <span>поиск</span>
                  <img className="search__icon" src={search} />
                </button>
                <input className="search__input" type="text" placeholder="Найти исполнителя..." aria-label="Найти исполнителя" /*onError= {this.onError}*/ />
              </div>
              <div className="main__cards">
                <a href="" className="card-link">
                  <article className="card">
                    <div className="card__favourite">
                      <img className="favourite__icon" src={starOutline} title="Избранное" />
                    </div>
                    <div className="card__image">
                      <img src={site2} alt="Превью карточки" aria-label="Превью карточки" />
                    </div>
                    <div className="card__desc">
                      <p className="card__text">Самое лучшее название, которое только можно придумать!</p>
                      <div className="card__tags">
                        <div className="card__tag">Сайты</div>
                        <div className="card__tag">Под ключ</div>
                        <div className="card__tag">Десктоп</div>
                      </div>
                    </div>
                  </article>
                </a>

                <a href="" className="card-link">
                  <article className="card">
                    <div className="card__favourite">
                      <img className="favourite__icon" src={starOutline} title="Избранное" />
                    </div>
                    <div className="card__image">
                      <img src={site3} alt="Превью карточки" aria-label="Превью карточки" />
                    </div>
                    <div className="card__desc">
                      <p className="card__text">Самое лучшее название, которое только можно придумать!</p>
                      <div className="card__tags">
                        <div className="card__tag">Сайты</div>
                        <div className="card__tag">Под ключ</div>
                        <div className="card__tag">Десктоп</div>
                      </div>
                    </div>
                  </article>
                </a>

                <a href="" className="card-link">
                  <article className="card">
                    <div className="card__favourite">
                      <img className="favourite__icon" src={starOutline} title="Избранное" />
                    </div>
                    <div className="card__image">
                      <img src={site1} alt="Превью карточки" aria-label="Превью карточки" />
                    </div>
                    <div className="card__desc">
                      <p className="card__text">Самое лучшее название, которое только можно придумать!</p>
                      <div className="card__tags">
                      </div>
                    </div>
                  </article>
                </a>
              </div>
          </section>
        </div>
      </main>
    </div>
  </div>
    </>
  );
};

export default Main;

