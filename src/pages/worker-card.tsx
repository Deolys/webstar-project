import React, { useState, useEffect } from "react";
import '../styles/normalize.css';
import '../styles/style.css';
import '../workerCardComponents/workerCardStyles/card-styles.css';


import logo from '../assets/icons/logo.svg';
import starGreen from '../assets/icons/star-green.svg';

import TopButtonsPanel from '../workerCardComponents/TopButtonsPanel.jsx';
import UploadBtn from '../workerCardComponents/UploadBtn.jsx';
import TagsPanel from '../workerCardComponents/TagsPanel.jsx';
import ProfileContainer from '../workerCardComponents/ProfileContainer.jsx';
import Article from '../workerCardComponents/Article.jsx';
import BottomEditButtonsPanel from '../workerCardComponents/BottomEditButtonsPanel.jsx';
import Ellipses from '../workerCardComponents/Ellipses.jsx';
import Slider from '../workerCardComponents/Slider.jsx';

import {sliderData, someTags, profileData, articleData1} from '../workerCardComponents/exampleData.js';

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

const Card = () => {
    const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isFavouritesAdded, setIsFavouritesAdded] = useState(false);
    const handleHeaderLinksToggle = () => {
      setIsHeaderLinksOpen(!isHeaderLinksOpen);
    }; 
    const [articleCount, setArticleCount] = useState(articleData1.length);

    const handleEditModeToggle = () => {
      setIsEditMode(!isEditMode);
    };

    const handleFavouritesToggle = () => {
      setIsFavouritesAdded(!isFavouritesAdded)
    }



    const addArticle = () => {
      articleData1.length<5 && articleData1.push({image: "", label: "", text: ""});
      setArticleCount(articleData1.length);
    }

    return (
      <body className="card-body">
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

      <main className="main-container">
      {/* <label className="container-label">Профиль пользователя</label> */}
          
          <TopButtonsPanel isOwner={true} favouritesBtnAction={handleFavouritesToggle} optionsBtnAction={handleEditModeToggle}/>

          <Slider sliderData={sliderData} isEditing={isEditMode}/>

          <TagsPanel initialTags={someTags} isEditing={isEditMode}/>

          <ProfileContainer profileData={profileData} isEditing={isEditMode}/>

          <div className="content-container">
              <label className="container-label">Информация о работе пользователя</label>
              { articleData1.map((item, index) => 
                {
                  return(<Article key={index} articleData={item} isEditing={isEditMode}/>)
                })
              }
              {isEditMode&&<UploadBtn isRel={true} bindAction={addArticle}/>}
          </div>
        
          <BottomEditButtonsPanel isEditing={isEditMode} cancelBtnAction={handleEditModeToggle} finishBtnAction={handleEditModeToggle}/>
      </main>
      
      <Ellipses count={"4"}/>
      </body>
      );
  };
  
  export default Card;