import React, { useState, useEffect } from "react";
import '../styles/normalize.css';
import '../styles/style.css';
import '../styles/card-styles.css';

import logo from '../assets/icons/logo.svg';
import starGreen from '../assets/icons/star-green.svg';
import options from '../assets/icons/settings-4-svgrepo-com.svg';
import buttonArrow from '../assets/icons/next-light-svgrepo-com.svg';

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

const Edit = () => {
    const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);
    const handleHeaderLinksToggle = () => {
      setIsHeaderLinksOpen(!isHeaderLinksOpen);
    };
    return (
        <><body className="card-body">
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

          <a className="header__link logout-link ">
            <button className="logout-btn">Выйти</button>
          </a>
        </nav>
        <Burger onHeaderLinksToggle={handleHeaderLinksToggle}/>
      </div>
    </header>
        <main className="main-container">
            <div className="buttons-panel">
                <button className="angle-button options" title="Редактировать профиль">
                    <img src={options}/>
                </button>
            </div>
            <div className="photo-panel">
                <div className="slider">
                <button className="arrow-button" title="Предыдущее изображение">
                  <img src = {buttonArrow}/>
                </button>
                    <div className="pagination-dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <button className="upload-btn"></button>
                    <ul>
                        <li><img src="" alt="portfolio image 1" style={{visibility: 'hidden'}}/></li>
                        <li><img src="" alt="portfolio image 2" style={{visibility: 'hidden'}}/></li>
                        <li><img src="" alt="portfolio image 3" style={{visibility: 'hidden'}}/></li>
                        <li><img src="" alt="portfolio image 4" style={{visibility: 'hidden'}}/></li>
                        <li><img src="" alt="portfolio image 5" style={{visibility: 'hidden'}}/></li>
                        <li><img src="" alt="portfolio image 6" style={{visibility: 'hidden'}}/></li>
                        <li><img src="" alt="portfolio image 7" style={{visibility: 'hidden'}}/></li>
                        <li><img src="" alt="portfolio image 8" style={{visibility: 'hidden'}}/></li>
                        <li><img src="" alt="portfolio image 9" style={{visibility: 'hidden'}}/></li>
                        <li><img src="" alt="portfolio image 10" style={{visibility: 'hidden'}}/></li>
                    </ul>
                    <button className="arrow-button right" title="Следующее изображение">
                      <img src = {buttonArrow}/>
                    </button>
                </div>
            </div>
            <div className="tags-panel">
                <button className="upload-btn rel"></button>
                <span className="tag">Тэг 1</span>
                <span className="tag">Тэг 2</span>
                <span className="tag">Тэг 3</span>
            </div>
    
            <div className="profile-container">
                <div className="profile-photo">
                    <img src="" alt="profile image" style={{visibility: 'hidden'}}/>
                    <button className="upload-btn"></button>
                </div>
    
                <div className="image-backline-container">
                    <img src="" alt="background image" style={{visibility: 'hidden'}}/>
                    <button className="upload-btn"></button>
                </div>
    
                <div className="profile-description">
                    <div className="username">Имя пользователя</div>
                    <div className="location">Город, Страна</div>
                    <div className="bio">
                        <textarea maxLength={350} placeholder="Напишите что-нибудь о себе"></textarea>
                    </div>
                </div>
            </div>
    
            <div className="content-container">
                <label className="container-label">Информация о работе пользователя</label>
                <section className="content-item">
                    <div className="item-photo">
                        <img src="" alt="content image №1" style={{visibility: 'hidden'}}/>
                        <button className="upload-btn"></button>
                    </div>
                    <input type="text" placeholder="Введите название..."/>
                    <textarea maxLength={350} placeholder="Введите описание"></textarea>
                </section>
    
                <section className="content-item">
                    <div className="item-photo">
                        <img src="" alt="content image №2" style={{visibility: 'hidden'}}/>
                        <button className="upload-btn"></button>
                    </div>
                    <input type="text" placeholder="Введите название..."/>
                    <textarea maxLength={350} placeholder="Введите описание"></textarea>
                </section>
                
                <section className="content-item">
                    <div className="item-photo">
                        <img src="" alt="content image №3" style={{visibility: 'hidden'}}/>
                        <button className="upload-btn"></button>
                    </div>
                    <input type="text" placeholder="Введите название..."/>
                    <textarea maxLength={350} placeholder="Введите описание"></textarea>
                </section>
    
                <button className="upload-btn rel"></button>
            </div>
            <div className="bottom-bar">
                <button className="manipulate-btn cancel">Отменить изменения</button>
                <button className="manipulate-btn accept">Готово</button>
            </div>
        </main>
        <div className="ellipses">
          <div className="ellipse"></div>
          <div className="ellipse"></div>
          <div className="ellipse" ></div>
          <div className="ellipse" ></div>
        </div>
    </body>
        </>
    );
}

export default Edit;
